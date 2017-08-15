import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import 'jest-enzyme';

import TopicArticles from '../TopicArticles';
import Article from '../Article';

describe('TopicArticles', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TopicArticles />, div);
  });

  it('should render 5 Articles', () => {
    const wrapper = shallow(<TopicArticles articles={(new Array(5)).fill(1)}/>);

    expect(wrapper.find(Article).length).toBe(5);
  });
});
