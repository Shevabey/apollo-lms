// app/course/[courseId]/module/[moduleId]/exercise/[exerciseId]/page.tsx
import React from 'react';

export default function ExercisePage({
  params,
}: {
  params: { courseId: string; moduleId: string; exerciseId: string };
}) {
  return (
    <div>
      Course: {params.courseId} <br />
      Module: {params.moduleId} <br />
      Exercise: {params.exerciseId}
    </div>
  );
}

export async function generateStaticParams() {
  // Dummy data atau ambil dari file JSON
  return [
    { courseId: '1', moduleId: 'm1', exerciseId: 'e1' },
    { courseId: '1', moduleId: 'm1', exerciseId: 'e2' },
    { courseId: '2', moduleId: 'm2', exerciseId: 'e1' },
  ];
}
