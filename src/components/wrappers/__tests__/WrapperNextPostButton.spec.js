import React from 'react';
import ReactDOM from 'react-dom';
import WrappedComponent from '../WrapperNextPostButton';
import { mount } from 'enzyme';
import 'jest-enzyme';

describe('WrapperNextPostButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WrappedComponent/>, div);
  });

  it('should renders with data-* attributes', () => {
    const wrapper = mount(<WrappedComponent />);
    const selector = '[data-analytics-event-category="Article page"]';

    expect(wrapper.find(selector)).toBePresent();
  });
});