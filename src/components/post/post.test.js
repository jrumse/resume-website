import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Post />, div);
  ReactDOM.unmountComponentAtNode(div);
});