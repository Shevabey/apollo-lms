import axios from "axios";

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  progress?: number;
}

export interface CourseFilters {
  category?: string;
  search?: string;
}

// ✅ Ambil daftar courses (dengan filter opsional)
export async function getCourses(filters?: CourseFilters): Promise<Course[]> {
  const res = await axios.get("/api/courses", { params: filters })
  return res.data
}

// ✅ Update progress course tertentu
export async function updateCourseProgress({
  courseId,
  progress,
}: {
  courseId: string
  progress: number
}): Promise<{ success: boolean; course: Course }> {
  const res = await axios.put(`/api/courses/${courseId}/progress`, { progress })
  return res.data
}
