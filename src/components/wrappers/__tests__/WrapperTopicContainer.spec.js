import React from 'react';
import ReactDOM from 'react-dom';
import WrappedComponent from '../WrapperTopicContainer';
import { mount } from 'enzyme';
import 'jest-enzyme';

describe('WrapperTopicContainer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WrappedComponent/>, div);
  });

  it('should renders with data-* attributes', () => {
    const wrapper = mount(<WrappedComponent />);
    const selector = '[data-analytics-event-category="Topic page"]';

    expect(wrapper.find(selector)).toBePresent();
  });
});