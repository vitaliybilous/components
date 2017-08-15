import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';

import Component from '../TopicArticles';
import Article from '../Article';

describe('TopicArticles', () => {
  it('should renders without crashing', () => {
    shallow(<Component />);
  });

  it('should render 5 Articles', () => {
    const wrapper = shallow(<Component articles={(new Array(5)).fill(1)}/>);
    expect(wrapper.find(Article).length).toBe(5);
  });
});
