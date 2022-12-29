import React from 'react';
import ReactDOM from 'react-dom';
import LoadingDialog from './loading-dialog';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoadingDialog />, div);
  ReactDOM.unmountComponentAtNode(div);
});