import React, { Component } from 'react';

const extendByAnalytics = (WrappedComponent) => {
  return class extends Component {
    render() {
      const { dataAnalyticsEventCategory, dataAnalyticsEventAction, dataAnalyticsEventLabel,
        dataAnalyticsEventIndex } = this.props;

      const localDataAnalyticsEventCategory = typeof dataAnalyticsEventCategory === 'function'
        ? dataAnalyticsEventCategory(this.props)
        : dataAnalyticsEventCategory;
      const localDataAnalyticsEventAction = typeof dataAnalyticsEventAction === 'function'
        ? dataAnalyticsEventAction(this.props)
        : dataAnalyticsEventAction;
      const localDataAnalyticsEventLabel = typeof dataAnalyticsEventLabel === 'function'
        ? dataAnalyticsEventLabel(this.props)
        : dataAnalyticsEventLabel;
      const localDataAnalyticsEventIndex = typeof dataAnalyticsEventIndex === 'function'
        ? dataAnalyticsEventIndex(this.props)
        : dataAnalyticsEventIndex;
      return (
        <WrappedComponent
          dataAttribute={{
            'data-analytics-event-category' : localDataAnalyticsEventCategory,
            'data-analytics-event-action' : localDataAnalyticsEventAction,
            'data-analytics-event-label' : localDataAnalyticsEventLabel,
            'data-analytics-event-value' : localDataAnalyticsEventIndex
          }}
          {...this.props} />);
    }
  };
};

export default extendByAnalytics;
