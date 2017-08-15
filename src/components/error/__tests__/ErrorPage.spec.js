import React from 'react';
import ReactDOM from 'react-dom';
import Component from '../ErrorPage';
import { shallow } from 'enzyme';
import 'jest-enzyme';

describe('ErrorPage', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component />, div);
  });

  it('should to have title and url', () => {
    const title = 'test_title';
    const link_url = 'test_link_url';

    const data = {
      title,
      link_url
    };

    const wrapper = shallow(<Component { ... data }/>);

    expect(wrapper.text()).toBe(title);
    expect(wrapper.find(`[href="${link_url}"]`)).toBePresent();
  });
});