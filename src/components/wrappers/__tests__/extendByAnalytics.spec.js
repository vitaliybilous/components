import React from 'react';
import extendByAnalytics from '../extendByAnalytics';
import { mount, shallow } from 'enzyme';
import 'jest-enzyme';

describe('Analytics HOC', () => {
  const TestComponent = (props) => {
    return <div { ...props.dataAttribute }/>
  };

  it('should renders without crashing', () => {
    const div = document.createElement('div');
    const Component = extendByAnalytics(TestComponent, {});
    shallow(<Component/>)
  });

  it('should call wrapped component', () => {
    const MockedComponent = jest.fn().mockImplementation(() => null);
    const Component = extendByAnalytics(MockedComponent, {});
    mount(<Component />);

    expect(MockedComponent.mock.calls.length).toBe(1);
  });

  it('should renders with data-* attributes', () => {
    const data = {
      dataAnalyticsEventCategory : 'test-analytics'
    };
    const Component = extendByAnalytics(TestComponent, { ...data });
    const wrapper = mount(<Component />);

    expect(wrapper.find(`[data-analytics-event-category="${data.dataAnalyticsEventCategory}"]`)).toBePresent();
  });

  it('should process function as param', () => {
    const dataAnalyticsEventCategory = 'test-analytics';
    const mockFn = jest.fn().mockImplementation(() => dataAnalyticsEventCategory);
    const data = {
      dataAnalyticsEventCategory : mockFn
    };
    const Component = extendByAnalytics(TestComponent, { ...data });
    const wrapper = mount(<Component />);

    expect(wrapper.find(`[data-analytics-event-category="${dataAnalyticsEventCategory}"]`)).toBePresent();
  });
});