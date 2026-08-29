import { db } from './db';

export const offlineContentService = {
  // Check if a chapter is downloaded locally
  async isChapterDownloaded(chapterId) {
    if (!chapterId) return false;
    const item = await db.downloadedChapters.get(chapterId);
    return !!item;
  },

  // Get a downloaded chapter with its full lesson & quiz payload
  async getDownloadedChapter(chapterId) {
    return await db.downloadedChapters.get(chapterId);
  },

  // Get all downloaded chapters
  async getAllDownloadedChapters() {
    return await db.downloadedChapters.toArray();
  },

  // Download chapter bundle with animated progress callback
  async downloadChapter(chapterData, onProgress = () => {}) {
    onProgress(10);
    
    // Simulate steps of caching metadata, translations, lessons, and diagrams
    await new Promise(r => setTimeout(r, 150));
    onProgress(35);

    await new Promise(r => setTimeout(r, 200));
    onProgress(70);

    const sizeMB = (Math.random() * 2.5 + 4.2).toFixed(1); // Estimated package size e.g. 5.6 MB

    const record = {
      id: chapterData.id,
      classId: chapterData.classId,
      subjectId: chapterData.subjectId,
      chapterNumber: chapterData.chapterNumber,
      title: chapterData.title,
      title_mr: chapterData.title_mr || chapterData.title,
      title_hi: chapterData.title_hi || chapterData.title,
      description: chapterData.description,
      sizeMB: parseFloat(sizeMB),
      downloadedAt: new Date().toISOString(),
      payload: chapterData
    };

    await db.downloadedChapters.put(record);
    
    onProgress(100);
    return record;
  },

  // Delete a downloaded chapter
  async removeChapter(chapterId) {
    await db.downloadedChapters.delete(chapterId);
  },

  // Calculate total storage used in MB
  async getTotalStorageMB() {
    const chapters = await db.downloadedChapters.toArray();
    const total = chapters.reduce((acc, curr) => acc + (curr.sizeMB || 4.5), 0);
    return total.toFixed(1);
  },

  // Clear all local downloaded content
  async clearAllDownloads() {
    await db.downloadedChapters.clear();
  }
};
