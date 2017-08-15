import React from 'react';
import Component from '../WrapperTopicArticles';
import { mount, shallow } from 'enzyme';
import 'jest-enzyme';

describe('WrapperTopicArticles', () => {
  it('renders without crashing', () => {
    shallow(<Component />);
  });

  it('should renders with data-* attributes', () => {
    const wrapper = mount(<Component />);
    const selector = '[data-analytics-event-category="Topic articles"]';

    expect(wrapper.find(selector)).toBePresent();
  });
});