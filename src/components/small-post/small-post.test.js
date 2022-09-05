import React from 'react';
import ReactDOM from 'react-dom';
import SmallPost from './SmallPost';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SmallPost />, div);
  ReactDOM.unmountComponentAtNode(div);
});