import React, { Component } from 'react';

const extendByAnalytics = (WrappedComponent) => {
  return class extends Component {
    render() {
      const { modifier } = this.props;
       const gtm_arrow_position_name = (modifier === 'header')
       ? 'top menu arrow'
       : (modifier === 'body')
           ? 'side arrow'
           : ''
       ;

      return (
        <WrappedComponent
          dataAttribute={{
            'data-analytics-event-category' : 'Article page',
            'data-analytics-event-action' : 'article click',
            'data-analytics-event-label' : gtm_arrow_position_name
          }}
          {...this.props} />);
    }
  };
};

export default extendByAnalytics;
