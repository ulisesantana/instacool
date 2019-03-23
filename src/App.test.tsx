import React from 'react';
import ReactDOM from 'react-dom';
import {RootElement} from './RootElement';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RootElement />, div);
  ReactDOM.unmountComponentAtNode(div);
});
