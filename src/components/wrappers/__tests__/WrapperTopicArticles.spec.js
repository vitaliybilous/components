import React from 'react';
import ReactDOM from 'react-dom';
import WrapperTopicArticles from '../WrapperTopicArticles';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WrapperTopicArticles articles={[]}/>, div);
});