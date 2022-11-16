import React, { lazy, Suspense } from 'react';

const LazyPost = lazy(() => import('./pic-desc'));

const PicDesc = props => (
  <Suspense fallback={null}>
    <LazyPost {...props} />
  </Suspense>
);

export default PicDesc;
