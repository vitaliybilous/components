import React from 'react';
import Component from '../Article';
import { shallow } from 'enzyme';
import 'jest-enzyme';

describe('Article : ', () => {
  it('should renders without crashing', () => {
    shallow(<Component />);
  });

  it('should data-* attributes exist', () => {
    const dataAttributes = {
      'data-test' : 'test',
      'data-test-again' : 'test-again'
    };

    const wrapper = shallow(<Component dataAttribute={dataAttributes}/>);

    expect(wrapper.find('[data-test="test"]')).toBePresent();
    expect(wrapper.find('[data-test-again="test-again"]')).toBePresent();
  });

  it('should title exist', () => {
    const wrapper = shallow(<Component title='TEST'/>);

    expect(wrapper.find('[title="TEST"]')).toBePresent();
    expect(wrapper.find('p')).toHaveText('TEST');
  });
});
