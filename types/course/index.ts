// Constants
export const COURSE_STATUS = {
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed',
  NOT_STARTED: 'not-started',
} as const;

export const COURSE_VARIANT = {
  DEFAULT: 'default',
  FEATURED: 'featured',
} as const;

// Types
export type CourseStatus = (typeof COURSE_STATUS)[keyof typeof COURSE_STATUS];
export type CourseVariant = (typeof COURSE_VARIANT)[keyof typeof COURSE_VARIANT];

// Interfaces
export interface ICourseBase {
  id: string;
  title: string;
  description: string;
  instructor: string;
  thumbnail?: string;
}

export interface ICourseProgress {
  progress: number; // 0-100
  status: CourseStatus;
}

export interface ICourseDisplay extends ICourseBase, ICourseProgress {
  variant?: CourseVariant;
}

// Component Props
export interface CourseCardProps extends ICourseDisplay {
  onClick?: () => void;
}
