import React from 'react';
import Component from '../FeedPageHeader';
import { shallow } from 'enzyme';
import 'jest-enzyme';

describe('FeedPageHeader', () => {
  it('should renders without crashing', () => {
    shallow(<Component />);
  });

  it('should renders with rss', () => {
    const data = {
      rss_path : 'test_rss_path'
    };
    const wrapper = shallow(<Component { ...data }/>);

    expect(wrapper.find(`a[href="${data.rss_path}"]`)).toBePresent();
  });

  it('should renders logo', () => {
    const data = {
      title_class : 'test_title_class',
      logo_path : 'test_logo_path'
    };

    const wrapper = shallow(<Component { ...data }/>);

    expect(wrapper.find(`.${data.title_class}--has-logo`)).toBePresent();
  });
});