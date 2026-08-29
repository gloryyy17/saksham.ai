import Dexie from 'dexie';

export class SakshamDB extends Dexie {
  constructor() {
    super('SakshamDatabase');
    
    this.version(1).stores({
      downloadedChapters: 'id, classId, subjectId, chapterNumber, downloadedAt',
      localProgress: '++id, [userId+lessonId], userId, lessonId, chapterId, completed, syncStatus',
      localQuizAttempts: '++id, [userId+quizId], userId, quizId, passed, syncStatus',
      localProjectSubmissions: '++id, [userId+projectId], userId, projectId, status, syncStatus',
      syncQueue: 'eventId, actionType, status, createdAt',
      cachedCurriculum: 'id, type, classId, subjectId',
      userSettings: 'key'
    });
  }
}

export const db = new SakshamDB();
