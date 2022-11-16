import React from 'react';
import ReactDOM from 'react-dom';
import PicDesc from './pic-desc';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PicDesc />, div);
  ReactDOM.unmountComponentAtNode(div);
});