import React from 'react';
import ReactDOM from 'react-dom';
import WrapperNextPostButton from '../WrapperNextPostButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WrapperNextPostButton />, div);
});