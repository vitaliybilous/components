import React from 'react';
import ReactDOM from 'react-dom';
import Component from '../FeedPageHeader';
import { shallow } from 'enzyme';
import 'jest-enzyme';

describe('FeedPageHeader', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component />, div);
  });

  it('should renders with rss', () => {
    const data = {
      rss_path : 'test_rss_path'
    };
    const wrapper = shallow(<Component { ...data }/>);
    expect(wrapper.find(`a[href="${data.rss_path}"]`)).toBePresent();
  });
});