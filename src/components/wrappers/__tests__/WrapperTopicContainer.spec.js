import React from 'react';
import ReactDOM from 'react-dom';
import WrapperTopicContainer from '../WrapperTopicContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WrapperTopicContainer articles={[]}/>, div);
});