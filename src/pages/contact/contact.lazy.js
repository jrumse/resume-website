import React, { lazy, Suspense } from 'react';

const LazyContact = lazy(() => import('./Contact'));

const Contact = props => (
  <Suspense fallback={null}>
    <LazyContact {...props} />
  </Suspense>
);

export default Contact;
