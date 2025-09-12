import { create } from 'zustand'

interface CourseProgress {
  modules: Record<string, number>
}

interface ProgressState {
  courseProgress: Record<string, CourseProgress>
  currentModule: string | null
  updateProgress: (courseId: string, moduleId: string, progress: number) => void
  setCurrentModule: (moduleId: string) => void
}

export const useProgressStore = create<ProgressState>((set, get) => ({
  courseProgress: {},
  currentModule: null,
  updateProgress: (courseId, moduleId, progress) =>
    set((state) => ({
      courseProgress: {
        ...state.courseProgress,
        [courseId]: {
          ...state.courseProgress[courseId],
          modules: {
            ...state.courseProgress[courseId]?.modules,
            [moduleId]: progress,
          },
        },
      },
    })),
  setCurrentModule: (moduleId) => set({ currentModule: moduleId }),
}))