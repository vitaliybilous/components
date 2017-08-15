import React from 'react';
import ReactDOM from 'react-dom';
import NextPostButton from '../NextPostButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NextPostButton />, div);
});