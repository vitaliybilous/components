import React from 'react';
import Component from '../WrapperNextPostButton';
import { mount, shallow } from 'enzyme';
import 'jest-enzyme';

describe('WrapperNextPostButton', () => {
  it('renders without crashing', () => {
    shallow(<Component />);
  });

  it('should renders with data-* attributes', () => {
    const wrapper = mount(<Component />);
    const selector = '[data-analytics-event-category="Article page"]';

    expect(wrapper.find(selector)).toBePresent();
  });
});