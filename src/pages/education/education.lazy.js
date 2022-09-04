import React, { lazy, Suspense } from 'react';

const LazyEducation = lazy(() => import('./Education'));

const Education = props => (
  <Suspense fallback={null}>
    <LazyEducation {...props} />
  </Suspense>
);

export default Education;
