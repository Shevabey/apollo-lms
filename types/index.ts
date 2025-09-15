export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'student' | 'instructor' | 'admin';
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  instructor: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: number; // in minutes
  modules: Module[];
  rating: number;
  studentsCount: number;
  price: number;
  isFree: boolean;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Module {
  id: string;
  courseId: string;
  title: string;
  description: string;
  order: number;
  duration: number;
  contents: Content[];
  isCompleted?: boolean;
}

export interface Content {
  id: string;
  moduleId: string;
  title: string;
  type: 'video' | 'text' | 'quiz' | 'exercise' | 'assignment';
  order: number;
  duration?: number;
  isCompleted?: boolean;
  url?: string;
}

export interface CourseProgress {
  courseId: string;
  userId: string;
  progress: number; // 0-100
  completedModules: string[];
  completedContents: string[];
  lastAccessed: string;
  startedAt: string;
  completedAt?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  type: 'info' | 'warning' | 'success' | 'announcement';
  isRead: boolean;
  createdAt: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  questionsCount: number;
  attempts: number;
  passingScore: number;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  quizId: string;
  question: string;
  type: 'multiple-choice' | 'true-false' | 'essay';
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  techStack: string[];
  dueDate: string;
  maxFileSize: number;
  allowedFileTypes: string[];
  status: 'not-started' | 'in-progress' | 'submitted' | 'graded';
  submittedAt?: string;
}

export const moduleNavigation = [
  {
    id: '1',
    title: 'Introduction to Web Technology',
    completed: true,
    type: 'text' as 'video' | 'text' | 'quiz' | 'exercise' | 'assignment',
  },
];
