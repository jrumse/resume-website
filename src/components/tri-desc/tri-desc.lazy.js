import React, { lazy, Suspense } from 'react';

const LazyPost = lazy(() => import('./tri-desc'));

const TriDesc = props => (
  <Suspense fallback={null}>
    <LazyPost {...props} />
  </Suspense>
);

export default TriDesc;
