import React from 'react';
import ReactDOM from 'react-dom';
import WrappedComponent from '../WrapperTopicArticles';
import { mount } from 'enzyme';
import 'jest-enzyme';

describe('WrapperTopicArticles', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WrappedComponent/>, div);
  });

  it('should renders with data-* attributes', () => {
    const wrapper = mount(<WrappedComponent />);
    const selector = '[data-analytics-event-category="Topic articles"]';

    expect(wrapper.find(selector)).toBePresent();
  });
});