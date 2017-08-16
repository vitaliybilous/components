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

  it('should renders with modifier header props', () => {
    const wrapper = mount(<Component modifier='header'/>);
    const selector = '[data-analytics-event-label="top menu arrow"]';

    expect(wrapper.find(selector)).toBePresent();
  });

  it('should renders with modifier body props', () => {
    const wrapper = mount(<Component modifier='body'/>);
    const selector = '[data-analytics-event-label="side arrow"]';

    expect(wrapper.find(selector)).toBePresent();
  });
});