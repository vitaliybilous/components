import React from 'react';
import ReactDOM from 'react-dom';
import NextPostButton from '../NextPostButton';
import { shallow } from 'enzyme';
import 'jest-enzyme';

describe('NextPostButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NextPostButton />, div);
  });

  it('should href exist', () => {
    const wrapper = shallow(<NextPostButton link_url='test_link_url'/>);

    expect(wrapper.find('[href="test_link_url"]')).toBePresent();
  });
});
