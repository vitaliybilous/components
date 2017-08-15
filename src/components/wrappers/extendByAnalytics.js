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
            'data-analytics-event-category' : prepareDataAttr(dataAnalyticsEventCategory, options),
            'data-analytics-event-action' : prepareDataAttr(dataAnalyticsEventAction, options),
            'data-analytics-event-label' : prepareDataAttr(dataAnalyticsEventLabel, options),
            'data-analytics-event-value' : prepareDataAttr(dataAnalyticsEventIndex, options)
          }}
          {...this.props} />);
    }
  };
};

export default extendByAnalytics;
