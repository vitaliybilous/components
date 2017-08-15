import React from 'react';
import Component from '../NextPostButton';
import { shallow } from 'enzyme';
import 'jest-enzyme';

describe('NextPostButton', () => {
  it('renders without crashing', () => {
    shallow(<Component />);
  });

  it('should href exist', () => {
    const wrapper = shallow(<Component link_url='test_link_url'/>);

    expect(wrapper.find('[href="test_link_url"]')).toBePresent();
  });
});
