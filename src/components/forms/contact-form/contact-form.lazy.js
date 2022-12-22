import React, { lazy, Suspense } from 'react';

const LazyContactForm = lazy(() => import('./contact-form'));

const ContactForm = props => (
  <Suspense fallback={null}>
    <LazyContactForm {...props} />
  </Suspense>
);

export default ContactForm;
