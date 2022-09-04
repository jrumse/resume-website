import React, { lazy, Suspense } from 'react';

const LazyWorkExperience = lazy(() => import('./WorkExperience'));

const WorkExperience = props => (
  <Suspense fallback={null}>
    <LazyWorkExperience {...props} />
  </Suspense>
);

export default WorkExperience;
