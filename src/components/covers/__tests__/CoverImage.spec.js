import React from 'react';
import ReactDOM from 'react-dom';
import Component from '../CoverImage';
import { shallow } from 'enzyme';
import 'jest-enzyme';

describe('CoverImage', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component />, div);
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