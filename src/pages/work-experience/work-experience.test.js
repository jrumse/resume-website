import React from 'react';
import ReactDOM from 'react-dom';
import WorkExperience from './WorkExperience';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WorkExperience />, div);
  ReactDOM.unmountComponentAtNode(div);
});