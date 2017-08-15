import React from 'react';
import Component from '../CoverVideo';
import { shallow } from 'enzyme';
import 'jest-enzyme';

describe('CoverVideo', () => {
  it('should renders without crashing', () => {
    shallow(<Component />);
  });

  it('should component to have video src and class', () => {
    const element_name = 'test_el';
    const video_url = 'test_video_url';
    const className = `${element_name}-container`;
    const data = {
      element_name,
      video_url
    };
    const wrapper = shallow(<Component { ...data }/>);

    expect(wrapper.find(`.${className}`)).toBePresent();
    expect(wrapper.find(`[data-video-src="${video_url}"]`)).toBePresent();
  });
});