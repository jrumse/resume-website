import React, { lazy, Suspense } from 'react';

const LazyPost = lazy(() => import('./Post'));

const Post = props => (
  <Suspense fallback={null}>
    <LazyPost {...props} />
  </Suspense>
);

export default Post;
