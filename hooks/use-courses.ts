import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getCourses, updateCourseProgress } from '@/services/course-service'

interface CourseFilters {
  category?: string;
  search?: string;
}

export function useCourses(filters?: CourseFilters) {
  return useQuery({
    queryKey: ['courses', filters],
    queryFn: () => getCourses(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes untuk catalog
  })
}

export function useCourseProgress(courseId: string) {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: updateCourseProgress,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['course', courseId] })
      queryClient.invalidateQueries({ queryKey: ['user-progress'] })
    },
  })
}