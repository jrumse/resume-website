import React from 'react';
import ReactDOM from 'react-dom';
import Education from './Education';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Education />, div);
  ReactDOM.unmountComponentAtNode(div);
});