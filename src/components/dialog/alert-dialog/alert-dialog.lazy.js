import React, { lazy, Suspense } from 'react';

const LazyAlertDialog = lazy(() => import('./alert-dialog'));

const AlertDialog = props => (
  <Suspense fallback={null}>
    <LazyAlertDialog {...props} />
  </Suspense>
);

export default AlertDialog;
