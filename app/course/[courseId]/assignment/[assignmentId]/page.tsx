import React from 'react';

export default function AssignmentPage({
  params,
}: {
  params: { courseId: string; assignmentId: string };
}) {
  return (
    <div>
      Course: {params.courseId}, Assignment: {params.assignmentId}
    </div>
  );
}

export async function generateStaticParams() {
  // dummy data atau fetch dari API/database
  return [
    { courseId: '1', assignmentId: 'a' },
    { courseId: '2', assignmentId: 'b' },
  ];
}
