import React from 'react';
import Component from '../WrapperTopicContainer';
import { mount, shallow } from 'enzyme';
import 'jest-enzyme';

describe('WrapperTopicContainer', () => {
  it('renders without crashing', () => {
    shallow(<Component />);
  });

  it('should renders with data-* attributes', () => {
    const wrapper = mount(<Component />);
    const selector = '[data-analytics-event-category="Topic page"]';

    expect(wrapper.find(selector)).toBePresent();
  });
});