import React, { Component } from 'react';

const extendByAnalytics = (WrappedComponent) => {
  return class extends Component {
    render() {
      const { dataAnalyticsEventCategory, dataAnalyticsEventAction, dataAnalyticsEventLabel } = this.props;

      const localDataAnalyticsEventCategory = typeof dataAnalyticsEventCategory === 'function'
        ? dataAnalyticsEventCategory(this.props)
        : dataAnalyticsEventCategory;
      const localDataAnalyticsEventAction = typeof dataAnalyticsEventAction === 'function'
        ? dataAnalyticsEventAction(this.props)
        : dataAnalyticsEventAction;
      const localDataAnalyticsEventLabel = typeof dataAnalyticsEventLabel === 'function'
        ? dataAnalyticsEventLabel(this.props)
        : dataAnalyticsEventLabel;

      return (
        <WrappedComponent
          dataAttribute={{
            'data-analytics-event-category' : localDataAnalyticsEventCategory,
            'data-analytics-event-action' : localDataAnalyticsEventAction,
            'data-analytics-event-label' : localDataAnalyticsEventLabel
          }}
          {...this.props} />);
    }
  };
};

export default extendByAnalytics;
