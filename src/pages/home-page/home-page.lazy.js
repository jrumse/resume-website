import React, { lazy, Suspense } from 'react';

const LazyHomePage = lazy(() => import('./HomePage'));

const HomePage = props => (
  <Suspense fallback={null}>
    <LazyHomePage {...props} />
  </Suspense>
);

export default HomePage;
