import React from 'react';

export default function CoursePage({ params }: { params: { courseId: string } }) {
  return <div>Course Page for {params.courseId}</div>;
}

export async function generateStaticParams() {
  // Dummy data dulu, nanti bisa ambil dari API/database
  return [{ courseId: '1' }, { courseId: '2' }, { courseId: '3' }];
}
