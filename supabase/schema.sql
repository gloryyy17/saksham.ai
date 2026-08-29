-- =========================================================
-- SAKSHAM.AI Database Schema
-- Offline-First Maharashtra State Board Learning Platform (Classes 6-10)
-- =========================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    avatar_url TEXT,
    role TEXT DEFAULT 'student' CHECK (role IN ('student', 'teacher', 'admin')),
    class_id INTEGER CHECK (class_id BETWEEN 6 AND 10),
    preferred_language TEXT DEFAULT 'mr' CHECK (preferred_language IN ('en', 'hi', 'mr')),
    learning_level TEXT DEFAULT 'intermediate' CHECK (learning_level IN ('beginner', 'intermediate', 'advanced')),
    low_bandwidth_mode BOOLEAN DEFAULT FALSE,
    low_power_mode BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. CLASSES TABLE (Maharashtra State Board 6 to 10)
CREATE TABLE IF NOT EXISTS public.classes (
    id INTEGER PRIMARY KEY, -- 6, 7, 8, 9, 10
    standard_name TEXT NOT NULL, -- e.g. "Class 8", "इयत्ता ८ वी", "कक्षा 8"
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. SUBJECTS TABLE
CREATE TABLE IF NOT EXISTS public.subjects (
    id TEXT PRIMARY KEY, -- e.g. 'math', 'science', 'history-civics', 'geography', 'english', 'marathi', 'hindi'
    name TEXT NOT NULL,
    icon TEXT,
    color TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. CLASS_SUBJECTS MAPPING
CREATE TABLE IF NOT EXISTS public.class_subjects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    class_id INTEGER REFERENCES public.classes(id) ON DELETE CASCADE,
    subject_id TEXT REFERENCES public.subjects(id) ON DELETE CASCADE,
    display_order INTEGER DEFAULT 1,
    UNIQUE(class_id, subject_id)
);

-- 5. CHAPTERS TABLE
CREATE TABLE IF NOT EXISTS public.chapters (
    id TEXT PRIMARY KEY, -- e.g. 'c8_math_ch1'
    class_id INTEGER REFERENCES public.classes(id) ON DELETE CASCADE,
    subject_id TEXT REFERENCES public.subjects(id) ON DELETE CASCADE,
    chapter_number INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    learning_objectives TEXT[],
    estimated_minutes INTEGER DEFAULT 45,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. CHAPTER TRANSLATIONS
CREATE TABLE IF NOT EXISTS public.chapter_translations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    chapter_id TEXT REFERENCES public.chapters(id) ON DELETE CASCADE,
    language TEXT NOT NULL CHECK (language IN ('en', 'hi', 'mr')),
    title TEXT NOT NULL,
    description TEXT,
    learning_objectives TEXT[],
    UNIQUE(chapter_id, language)
);

-- 7. LESSONS TABLE
CREATE TABLE IF NOT EXISTS public.lessons (
    id TEXT PRIMARY KEY, -- e.g. 'c8_math_ch1_l1'
    chapter_id TEXT REFERENCES public.chapters(id) ON DELETE CASCADE,
    lesson_number INTEGER NOT NULL,
    title TEXT NOT NULL,
    topic_name TEXT NOT NULL,
    objective TEXT,
    explanation JSONB NOT NULL, -- structured reading blocks
    examples JSONB,             -- step-by-step solved examples
    practice JSONB,             -- practice problems with hints
    duration_minutes INTEGER DEFAULT 15,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. LESSON TRANSLATIONS
CREATE TABLE IF NOT EXISTS public.lesson_translations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lesson_id TEXT REFERENCES public.lessons(id) ON DELETE CASCADE,
    language TEXT NOT NULL CHECK (language IN ('en', 'hi', 'mr')),
    title TEXT NOT NULL,
    topic_name TEXT NOT NULL,
    objective TEXT,
    explanation JSONB NOT NULL,
    examples JSONB,
    practice JSONB,
    UNIQUE(lesson_id, language)
);

-- 9. QUIZZES TABLE
CREATE TABLE IF NOT EXISTS public.quizzes (
    id TEXT PRIMARY KEY, -- e.g. 'quiz_c8_math_ch1'
    chapter_id TEXT REFERENCES public.chapters(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    total_marks INTEGER DEFAULT 10,
    passing_marks INTEGER DEFAULT 6,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. QUIZ QUESTIONS TABLE
CREATE TABLE IF NOT EXISTS public.quiz_questions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    quiz_id TEXT REFERENCES public.quizzes(id) ON DELETE CASCADE,
    question_number INTEGER NOT NULL,
    question_text TEXT NOT NULL,
    options JSONB NOT NULL, -- array of 4 choices
    correct_option_index INTEGER NOT NULL,
    explanation TEXT,
    points INTEGER DEFAULT 1
);

-- 11. QUIZ QUESTION TRANSLATIONS
CREATE TABLE IF NOT EXISTS public.quiz_question_translations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    question_id UUID REFERENCES public.quiz_questions(id) ON DELETE CASCADE,
    language TEXT NOT NULL CHECK (language IN ('en', 'hi', 'mr')),
    question_text TEXT NOT NULL,
    options JSONB NOT NULL,
    explanation TEXT,
    UNIQUE(question_id, language)
);

-- 12. PROGRESS TABLE
CREATE TABLE IF NOT EXISTS public.progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    lesson_id TEXT REFERENCES public.lessons(id) ON DELETE CASCADE,
    chapter_id TEXT REFERENCES public.chapters(id) ON DELETE CASCADE,
    completed BOOLEAN DEFAULT FALSE,
    time_spent_seconds INTEGER DEFAULT 0,
    completed_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, lesson_id)
);

-- 13. QUIZ ATTEMPTS TABLE
CREATE TABLE IF NOT EXISTS public.quiz_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    quiz_id TEXT REFERENCES public.quizzes(id) ON DELETE CASCADE,
    score INTEGER NOT NULL,
    max_score INTEGER NOT NULL,
    passed BOOLEAN NOT NULL,
    answers JSONB,
    completed_at TIMESTAMPTZ DEFAULT NOW()
);

-- 14. PROJECTS TABLE
CREATE TABLE IF NOT EXISTS public.projects (
    id TEXT PRIMARY KEY,
    class_id INTEGER REFERENCES public.classes(id) ON DELETE CASCADE,
    subject_id TEXT REFERENCES public.subjects(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    problem_statement TEXT NOT NULL,
    instructions JSONB NOT NULL,
    rubric JSONB NOT NULL,
    difficulty TEXT DEFAULT 'medium' CHECK (difficulty IN ('easy', 'medium', 'hard')),
    points INTEGER DEFAULT 100,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 15. PROJECT SUBMISSIONS TABLE
CREATE TABLE IF NOT EXISTS public.project_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    project_id TEXT REFERENCES public.projects(id) ON DELETE CASCADE,
    submission_text TEXT,
    media_url TEXT,
    status TEXT DEFAULT 'submitted' CHECK (status IN ('draft', 'submitted', 'evaluated')),
    score INTEGER DEFAULT 0,
    feedback TEXT,
    submitted_at TIMESTAMPTZ DEFAULT NOW(),
    evaluated_at TIMESTAMPTZ,
    UNIQUE(user_id, project_id)
);

-- 16. SKILLS TABLE
CREATE TABLE IF NOT EXISTS public.skills (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('academic', 'practical', 'digital', 'project', 'communication')),
    description TEXT,
    max_score INTEGER DEFAULT 100
);

-- 17. STUDENT SKILLS TABLE
CREATE TABLE IF NOT EXISTS public.student_skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    skill_id TEXT REFERENCES public.skills(id) ON DELETE CASCADE,
    score NUMERIC(5,2) DEFAULT 0.00,
    last_updated TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, skill_id)
);

-- 18. OPPORTUNITIES TABLE
CREATE TABLE IF NOT EXISTS public.opportunities (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    organization TEXT NOT NULL,
    category TEXT NOT NULL, -- e.g. 'competition', 'exhibition', 'scholarship', 'workshop'
    description TEXT NOT NULL,
    min_class INTEGER DEFAULT 6,
    max_class INTEGER DEFAULT 10,
    required_skills JSONB NOT NULL, -- e.g. [{"skill_id": "math_problem_solving", "weight": 0.4}]
    deadline DATE,
    link TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 19. APPLICATIONS TABLE
CREATE TABLE IF NOT EXISTS public.applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    opportunity_id TEXT REFERENCES public.opportunities(id) ON DELETE CASCADE,
    status TEXT DEFAULT 'applied' CHECK (status IN ('applied', 'shortlisted', 'accepted', 'rejected')),
    applied_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, opportunity_id)
);

-- 20. SYNC EVENTS TABLE (Deduplication via unique event_id)
CREATE TABLE IF NOT EXISTS public.sync_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID UNIQUE NOT NULL,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    action_type TEXT NOT NULL, -- 'LESSON_COMPLETE', 'QUIZ_ATTEMPT', 'PROJECT_SUBMIT', 'PROFILE_UPDATE'
    payload JSONB NOT NULL,
    status TEXT DEFAULT 'synced' CHECK (status IN ('pending', 'synced', 'failed')),
    client_timestamp TIMESTAMPTZ NOT NULL,
    server_timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- 21. COURSE DOWNLOADS
CREATE TABLE IF NOT EXISTS public.course_downloads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    chapter_id TEXT REFERENCES public.chapters(id) ON DELETE CASCADE,
    downloaded_at TIMESTAMPTZ DEFAULT NOW(),
    package_version TEXT DEFAULT '1.0.0',
    UNIQUE(user_id, chapter_id)
);

-- 22. OFFLINE CONTENT PACKAGES & RESOURCES
CREATE TABLE IF NOT EXISTS public.offline_content (
    id TEXT PRIMARY KEY,
    content_type TEXT NOT NULL,
    content_id TEXT NOT NULL,
    payload JSONB NOT NULL,
    version TEXT DEFAULT '1.0.0',
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.resources (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    type TEXT NOT NULL, -- 'pdf', 'diagram', 'formula_sheet'
    url TEXT NOT NULL,
    class_id INTEGER REFERENCES public.classes(id),
    subject_id TEXT REFERENCES public.subjects(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =========================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.class_subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chapter_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_question_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sync_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_downloads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.offline_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;

-- Read policies for general curriculum (Public/Students)
CREATE POLICY "Public Read Classes" ON public.classes FOR SELECT USING (true);
CREATE POLICY "Public Read Subjects" ON public.subjects FOR SELECT USING (true);
CREATE POLICY "Public Read Class Subjects" ON public.class_subjects FOR SELECT USING (true);
CREATE POLICY "Public Read Chapters" ON public.chapters FOR SELECT USING (true);
CREATE POLICY "Public Read Chapter Translations" ON public.chapter_translations FOR SELECT USING (true);
CREATE POLICY "Public Read Lessons" ON public.lessons FOR SELECT USING (true);
CREATE POLICY "Public Read Lesson Translations" ON public.lesson_translations FOR SELECT USING (true);
CREATE POLICY "Public Read Quizzes" ON public.quizzes FOR SELECT USING (true);
CREATE POLICY "Public Read Quiz Questions" ON public.quiz_questions FOR SELECT USING (true);
CREATE POLICY "Public Read Quiz Question Translations" ON public.quiz_question_translations FOR SELECT USING (true);
CREATE POLICY "Public Read Projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Public Read Skills" ON public.skills FOR SELECT USING (true);
CREATE POLICY "Public Read Opportunities" ON public.opportunities FOR SELECT USING (true);
CREATE POLICY "Public Read Resources" ON public.resources FOR SELECT USING (true);
CREATE POLICY "Public Read Offline Content" ON public.offline_content FOR SELECT USING (true);

-- User-scoped policies
CREATE POLICY "Users can read own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can read own progress" ON public.progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert/update own progress" ON public.progress FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can read own quiz attempts" ON public.quiz_attempts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own quiz attempts" ON public.quiz_attempts FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own project submissions" ON public.project_submissions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own project submissions" ON public.project_submissions FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can read own skills" ON public.student_skills FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own skills" ON public.student_skills FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can read own applications" ON public.applications FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own applications" ON public.applications FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can insert/read sync events" ON public.sync_events FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage course downloads" ON public.course_downloads FOR ALL USING (auth.uid() = user_id);
