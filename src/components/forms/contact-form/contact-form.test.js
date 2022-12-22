import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './contact-form';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});