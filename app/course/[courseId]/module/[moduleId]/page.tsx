import React from 'react';

export default function ModulDetail({
  params,
}: {
  params: { courseId: string; moduleId: string };
}) {
  return (
    <div>
      Quiz Page <br />
      Course: {params.courseId} <br />
      Module: {params.moduleId}
    </div>
  );
}

// Wajib untuk static export
export async function generateStaticParams() {
  return [
    { courseId: '1', moduleId: 'm1' },
    { courseId: '1', moduleId: 'm2' },
    { courseId: '2', moduleId: 'm1' },
  ];
}
