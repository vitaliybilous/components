import React from 'react';
import ReactDOM from 'react-dom';
import Component from '../ContentSingle';
import { shallow } from 'enzyme';
import 'jest-enzyme';

describe('ContentSingle', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component />, div);
  });

  it('should component to have class and title', () => {
    const block_name = 'test';
    const className = `${block_name}__single-title`;
    const data = {
      block_name,
      topic_title : 'TEST TITLE'
    };
    const wrapper = shallow(<Component { ...data }/>);

    expect(wrapper.find(`.${className}`)).toBePresent();
    expect(wrapper.text()).toBe(data.topic_title);
  });
});