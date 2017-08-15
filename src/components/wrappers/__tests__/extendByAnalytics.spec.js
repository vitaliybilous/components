import React from 'react';
import ReactDOM from 'react-dom';
import extendByAnalytics from '../extendByAnalytics';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const Component = extendByAnalytics(() => <div>TEST</div>, {});
  ReactDOM.render(<Component />, div);
});