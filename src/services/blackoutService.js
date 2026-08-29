import { db } from './db';

const CHECKPOINT_KEY = 'saksham_checkpoint';

// Hashes a table's contents so we can detect corruption, not just emptiness
async function hashTable(records) {
    // Sort by a stable key so ordering doesn't cause false positives
    const sorted = [...records].sort((a, b) => (a.id ?? 0) - (b.id ?? 0));
    const json = JSON.stringify(sorted);
    const bytes = new TextEncoder().encode(json);
    const digest = await crypto.subtle.digest('SHA-256', bytes);
    return Array.from(new Uint8Array(digest))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

export async function writeCheckpoint() {
    const progress = await db.localProgress.toArray();
    const quizzes = await db.localQuizAttempts.toArray();

    const snapshot = {
        progressCount: progress.length,
        progressHash: await hashTable(progress),
        quizCount: quizzes.length,
        quizHash: await hashTable(quizzes),
        updatedAt: new Date().toISOString()
    };
    localStorage.setItem(CHECKPOINT_KEY, JSON.stringify(snapshot));
    return snapshot;
}

export async function detectCorruption() {
    const checkpoint = JSON.parse(localStorage.getItem(CHECKPOINT_KEY) || 'null');
    if (!checkpoint) return { corrupted: false };

    const progress = await db.localProgress.toArray();
    const quizzes = await db.localQuizAttempts.toArray();
    const liveProgressHash = await hashTable(progress);
    const liveQuizHash = await hashTable(quizzes);

    const wiped = progress.length === 0 && checkpoint.progressCount > 0;
    const tampered = progress.length === checkpoint.progressCount
        && liveProgressHash !== checkpoint.progressHash;

    return {
        corrupted: wiped || tampered || liveQuizHash !== checkpoint.quizHash,
        mode: wiped ? 'wiped' : tampered ? 'tampered' : 'clean',
        checkpoint,
        live: { progressCount: progress.length, quizCount: quizzes.length }
    };
}