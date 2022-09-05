import React, { lazy, Suspense } from 'react';

const LazySmallPost = lazy(() => import('./SmallPost'));

const SmallPost = props => (
  <Suspense fallback={null}>
    <LazySmallPost {...props} />
  </Suspense>
);

export default SmallPost;
