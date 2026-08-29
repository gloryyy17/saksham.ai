import { v4 as uuidv4 } from 'uuid';
import { db } from './db';

class SyncService {
  constructor() {
    this.isSyncing = false;
    this.listeners = new Set();
    this.status = navigator.onLine ? 'synced' : 'offline';
    this.lastSyncTime = null;

    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => {
        this.status = 'synced';
        this.notifyListeners();
        this.processQueue();
      });

      window.addEventListener('offline', () => {
        this.status = 'offline';
        this.notifyListeners();
      });
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    listener({ status: this.status, lastSyncTime: this.lastSyncTime });
    return () => this.listeners.delete(listener);
  }

  notifyListeners() {
    this.listeners.forEach(listener => {
      try {
        listener({ status: this.status, lastSyncTime: this.lastSyncTime });
      } catch (err) {
        console.error('Sync listener error:', err);
      }
    });
  }

  // Add an action to the local sync queue
  async enqueueAction(actionType, payload, userId = 'guest_user') {
    const eventId = uuidv4();
    const syncItem = {
      eventId,
      userId,
      actionType,
      payload,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    await db.syncQueue.put(syncItem);
    
    // Also save in local progress / attempts immediately
    if (actionType === 'LESSON_COMPLETE') {
      await db.localProgress.put({
        userId,
        lessonId: payload.lessonId,
        chapterId: payload.chapterId,
        completed: true,
        completedAt: new Date().toISOString(),
        syncStatus: 'pending'
      });
    } else if (actionType === 'QUIZ_ATTEMPT') {
      await db.localQuizAttempts.put({
        userId,
        quizId: payload.quizId,
        score: payload.score,
        maxScore: payload.maxScore,
        passed: payload.passed,
        answers: payload.answers,
        completedAt: new Date().toISOString(),
        syncStatus: 'pending'
      });
    } else if (actionType === 'PROJECT_SUBMIT') {
      await db.localProjectSubmissions.put({
        userId,
        projectId: payload.projectId,
        submissionText: payload.submissionText,
        status: 'submitted',
        submittedAt: new Date().toISOString(),
        syncStatus: 'pending'
      });
    }

    if (navigator.onLine) {
      this.processQueue();
    } else {
      this.status = 'offline';
      this.notifyListeners();
    }

    return eventId;
  }

  // Get total pending changes
  async getPendingCount() {
    return await db.syncQueue.where('status').equals('pending').count();
  }

  // Process and push sync queue to backend
  async processQueue() {
    if (this.isSyncing || !navigator.onLine) return;

    const pendingEvents = await db.syncQueue.where('status').equals('pending').toArray();
    if (pendingEvents.length === 0) {
      this.status = 'synced';
      this.notifyListeners();
      return;
    }

    this.isSyncing = true;
    this.status = 'syncing';
    this.notifyListeners();

    try {
      const response = await fetch('/api/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ events: pendingEvents })
      });

      if (response.ok) {
        const result = await response.json();
        
        // Mark all processed events as synced in IndexedDB
        for (const ev of pendingEvents) {
          await db.syncQueue.update(ev.eventId, { status: 'synced', syncedAt: new Date().toISOString() });
          
          if (ev.actionType === 'LESSON_COMPLETE') {
            await db.localProgress.where({ userId: ev.userId, lessonId: ev.payload.lessonId }).modify({ syncStatus: 'synced' });
          } else if (ev.actionType === 'QUIZ_ATTEMPT') {
            await db.localQuizAttempts.where({ userId: ev.userId, quizId: ev.payload.quizId }).modify({ syncStatus: 'synced' });
          } else if (ev.actionType === 'PROJECT_SUBMIT') {
            await db.localProjectSubmissions.where({ userId: ev.userId, projectId: ev.payload.projectId }).modify({ syncStatus: 'synced' });
          }
        }

        this.lastSyncTime = new Date();
        this.status = 'synced';
      } else {
        console.warn('Sync server returned error, will retry later.');
        this.status = 'offline';
      }
    } catch (err) {
      console.warn('Offline or sync endpoint unreachable:', err);
      this.status = 'offline';
    } finally {
      this.isSyncing = false;
      this.notifyListeners();
    }
  }
}

export const syncService = new SyncService();
