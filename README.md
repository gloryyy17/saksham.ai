# SAKSHAM.AI — Learn. Understand. Achieve.
### Offline-First Maharashtra State Board Learning Platform (Classes 6 to 10)

[![Maharashtra State Board](https://img.shields.io/badge/Curriculum-Maharashtra%20State%20Board%20(6--10)-1E3A8A?style=for-the-badge)](https://mahahsscboard.in/)
[![Offline First](https://img.shields.io/badge/Offline%20First-IndexedDB%20%2B%20Dexie.js-0D9488?style=for-the-badge)](https://dexie.org/)
[![Multilingual](https://img.shields.io/badge/Languages-मराठी%20%7C%20हिंदी%20%7C%20English-EA580C?style=for-the-badge)](https://saksham.ai/)

---

## 1. Product Vision & Overview

**SAKSHAM.AI** (*"Learn. Understand. Achieve."*) is an offline-first, multilingual, AI-powered educational platform engineered specifically for **Maharashtra State Board students in Classes 6, 7, 8, 9, and 10**, with special focus on rural and low-connectivity regions such as Kopargaon and Ahmednagar district.

> **Core Principle:** *"Quality learning should not stop because internet connectivity is poor."*

The platform guides students through an empowering continuum:
$$\text{Learn} \longrightarrow \text{Understand} \longrightarrow \text{Practice} \longrightarrow \text{Ask Doubts} \longrightarrow \text{Take Quizzes} \longrightarrow \text{Complete Projects} \longrightarrow \text{Build Skills} \longrightarrow \text{Track Progress} \longrightarrow \text{Discover Opportunities}$$

---

## 2. Key Pillars & Features

### 1. Maharashtra State Board Curriculum (Classes 6–10)
- **Structured Academic Taxonomy**: Class $\rightarrow$ Subject $\rightarrow$ Chapter $\rightarrow$ Topic $\rightarrow$ Lesson $\rightarrow$ Practice $\rightarrow$ Assessment Quiz.
- Supports Mathematics, Science (General Science, Science & Technology Parts 1 & 2), Social Science, English, Marathi, and Hindi with original summaries, learning objectives, worked examples, and interactive quizzes.

### 2. Strict Multilingual Support (मराठी, हिंदी, English)
- Language selector **featured on the Landing Page** before login as well as in the persistent top navigation.
- Selecting a language **instantly switches the entire website and curriculum** with zero mixed-language UI.
- Persists across `localStorage` and `profiles.preferred_language`.

### 3. Offline-First Architecture & Sync Engine
- Powered by **IndexedDB & Dexie.js**.
- **Download for Offline**: Students can download full chapter packages with a live animated progress counter.
- **Offline Mode**: Students can read lessons, solve interactive practice problems, and take quizzes with **zero internet connection**.
- **Deduplicated Sync Queue**: Every offline progress event receives a unique UUID `event_id`. When connection is restored, the client automatically synchronizes with the server (`POST /api/sync`), preventing duplicate progress.

### 4. Voice-Enabled Assistant (Web Speech API)
- Speech recognition and Text-To-Speech playback in `mr-IN` (Marathi), `hi-IN` (Hindi), and `en-IN` (English).
- Students can speak questions naturally (e.g. *"गुरुत्वाकर्षण म्हणजे काय?"*) and listen to spoken explanations.

### 5. Visual Doubt Solver (Google Lens Style)
- Students can upload or photograph textbook questions and diagrams.
- Online OCR and vision processing breaks down problems into **5 structured educational steps**:
  1. *What is Given*
  2. *Formula / Core Principle*
  3. *Step-by-Step Calculation*
  4. *Final Answer*
  5. *Simple Concept Explanation*

### 6. Transparent Skill Passport & Formula
- Calculates student competency transparently using the strict formula:
  $$\text{Skill Score} = (\text{Course Completion} \times 30\%) + (\text{Quiz Performance} \times 30\%) + (\text{Project Performance} \times 40\%)$$
- Visual passport categorizes: Academic Problem Solving, Scientific Inquiry, Digital Literacy, Project Execution, and Communication.

### 7. Opportunity Matching System
- Matches students with age-appropriate competitions, science exhibitions (e.g., INSPIRE Award - MANAK), and scholarships (e.g., NMMS Scholarship).
- Calculates a weighted Match Percentage (e.g. 76% Match) and recommends targeted lessons to close skill gaps.

---

## 3. Technology Stack

- **Frontend**: React 18, Vite, React Router v6, Lucide React, Canvas-Confetti, TailwindCSS (Vanilla CSS tokens).
- **Offline & Storage**: Progressive Web App (PWA), Service Worker (`vite-plugin-pwa`), Dexie.js (IndexedDB).
- **Backend API**: Node.js, Express, Helmet, CORS, Express Rate Limit, Multer, UUID.
- **Database & Auth**: Supabase PostgreSQL with Row Level Security (RLS) policies and Google OAuth integration.
- **AI & Speech**: Web Speech API (`SpeechRecognition` & `speechSynthesis`), Retrieval-Augmented Generation (RAG) against Maharashtra State Board syllabus.

---

## 4. Project Structure

```
saksham.ai/
├── public/
│   ├── favicon.svg
│   └── manifest.json
├── server/
│   └── index.js              # Express REST API (/api/classes, /api/sync, /api/ai/tutor, /api/ai/image)
├── src/
│   ├── components/
│   │   ├── ai/               # VoiceAssistant, ImageQuestion, AITutorChat
│   │   ├── common/           # LanguageSelector, SyncBadge, OfflineBanner, DownloadButton
│   │   ├── curriculum/       # SubjectCard, ChapterCard, LessonViewer, QuizComponent
│   │   ├── layout/           # Header, Sidebar, BottomNav, Footer
│   │   ├── opportunities/    # OpportunityCard
│   │   ├── projects/         # ProjectCard
│   │   └── skills/           # SkillPassport
│   ├── contexts/
│   │   ├── AuthContext.jsx
│   │   ├── CurriculumContext.jsx
│   │   ├── LanguageContext.jsx
│   │   └── NetworkContext.jsx
│   ├── data/
│   │   ├── curriculumData.js # Classes 6-10 Maharashtra State Board Syllabus
│   │   ├── diagnosticData.js # Onboarding 3-question diagnostic assessments
│   │   ├── opportunitiesData.js
│   │   ├── projectsData.js
│   │   └── skillsData.js
│   ├── lib/
│   │   └── supabase.js
│   ├── locales/
│   │   ├── en.js             # English translations
│   │   ├── hi.js             # Hindi translations
│   │   └── mr.js             # Marathi translations
│   ├── pages/                # Landing, Dashboard, Learn, Subject, Chapter, Lesson, Quiz, AI Tutor, Projects, Skills, Opportunities, Offline, OfflineTestLab, Admin, Settings, Profile
│   ├── services/
│   │   ├── db.js             # Dexie.js IndexedDB schema
│   │   ├── offlineContentService.js
│   │   └── syncService.js    # Batch sync engine with UUID deduplication
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── supabase/
│   └── schema.sql            # Full PostgreSQL schema with RLS policies
├── package.json
└── vite.config.js
```

---

## 5. Getting Started & Running Locally

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Create a `.env` file from `.env.example`:
```bash
cp .env.example .env
```

### 3. Run Frontend & Backend Concurrently
```bash
npm run dev:all
```
- **Frontend App**: `http://localhost:5173`
- **Express Backend API**: `http://localhost:5000`

---

## 6. The 5-Minute Hackathon Demo Workflow

1. **Front Page**: Open `http://localhost:5173`. Click **मराठी** or **हिंदी** — notice the entire website switches instantly.
2. **Instant Demo Login**: Click **"Try Demo Account (इयत्ता ८ वी)"** to log in as Rahul Patil (Class 8).
3. **Download Chapter**: Open **Mathematics** $\rightarrow$ Click **"Download for Offline"** on Chapter 1 (*Rational Numbers*).
4. **Disconnect / Test Offline Lab**: Open `/offline-test` $\rightarrow$ Click **"Simulate OFFLINE"**.
5. **Learn Offline**: Open Lesson 1 $\rightarrow$ Mark Complete $\rightarrow$ Take Chapter Quiz $\rightarrow$ Score is saved locally into IndexedDB.
6. **Automatic Reconnection Sync**: Turn OFFLINE simulation OFF $\rightarrow$ Watch the Sync Queue push the event to `/api/sync` and show **✓ Synced**.
7. **Ask Doubt by Voice**: Open **AI Tutor** $\rightarrow$ Tap microphone $\rightarrow$ Ask *"गुरुत्वाकर्षण म्हणजे काय?"* in Marathi $\rightarrow$ Listen to spoken AI response.
8. **Visual Doubt Solver**: Open Visual Doubt Solver $\rightarrow$ Load sample Math Problem $\rightarrow$ Receive 5-step structured educational solution.
9. **Skill Passport**: Open `/skills` $\rightarrow$ Inspect the $(30\% + 30\% + 40\%)$ score formula mapping to state scholarships!

---

**SAKSHAM.AI** • *Learn. Understand. Achieve.*
