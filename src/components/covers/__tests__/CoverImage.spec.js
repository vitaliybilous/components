import React from 'react';
import Component from '../CoverImage';
import { shallow } from 'enzyme';
import 'jest-enzyme';

describe('CoverImage', () => {
  it('should renders without crashing', () => {
    shallow(<Component />);
  });

  it('should component to have background image', () => {
    const small_image_url = 'test_url';
    const element_name = 'test_el';
    const className = `${element_name}-container--with-bg`;
    const data = {
      small_image_url,
      element_name
    };
    const wrapper = shallow(<Component { ...data }/>);

    expect(wrapper.find(`.${className}`)).toBePresent();
  });
});