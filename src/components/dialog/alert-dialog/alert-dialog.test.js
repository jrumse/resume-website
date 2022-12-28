import React from 'react';
import ReactDOM from 'react-dom';
import AlertDialog from './alert-dialog';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AlertDialog />, div);
  ReactDOM.unmountComponentAtNode(div);
});