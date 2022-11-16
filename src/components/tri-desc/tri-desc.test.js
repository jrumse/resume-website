import React from 'react';
import ReactDOM from 'react-dom';
import TriDesc from './tri-desc';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TriDesc />, div);
  ReactDOM.unmountComponentAtNode(div);
});