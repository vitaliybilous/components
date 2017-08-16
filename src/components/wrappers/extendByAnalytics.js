import React, { Component } from 'react';

const prepareDataAttr = (prop, opts) => typeof prop === 'function' ? prop(opts) : prop;

const extendByAnalytics = (WrappedComponent, options) => {
  return class extends Component {
    render() {
      const { dataAnalyticsEventCategory, dataAnalyticsEventAction, dataAnalyticsEventLabel,
        dataAnalyticsEventIndex } = options;

      return (
        <WrappedComponent
          dataAttribute={{
            'data-analytics-event-category' : prepareDataAttr(dataAnalyticsEventCategory, this.props),
            'data-analytics-event-action' : prepareDataAttr(dataAnalyticsEventAction, this.props),
            'data-analytics-event-label' : prepareDataAttr(dataAnalyticsEventLabel, this.props),
            'data-analytics-event-value' : prepareDataAttr(dataAnalyticsEventIndex, this.props)
          }}
          {...this.props} />);
    }
  };
};

export default extendByAnalytics;
