import React from 'react';

export default function QuizDetail({
  params,
}: {
  params: { courseId: string; moduleId: string; quizId: string };
}) {
  return (
    <div>
      Quiz Detail Page <br />
      Course: {params.courseId} <br />
      Module: {params.moduleId} <br />
      Quiz: {params.quizId}
    </div>
  );
}

// Wajib kalau pakai output: "export"
export async function generateStaticParams() {
  return [
    { courseId: '1', moduleId: 'm1', quizId: 'q1' },
    { courseId: '1', moduleId: 'm1', quizId: 'q2' },
    { courseId: '2', moduleId: 'm2', quizId: 'q1' },
  ];
}
