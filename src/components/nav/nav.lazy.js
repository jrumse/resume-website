import React, { lazy, Suspense } from 'react';

const LazyNav = lazy(() => import('./Nav'));

const Nav = props => (
  <Suspense fallback={null}>
    <LazyNav {...props} />
  </Suspense>
);

export default Nav;
