import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});