import React from 'react';
import ReactDOM from 'react-dom';
import TopicArticles from '../TopicArticles';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopicArticles articles={[]}/>, div);
});
