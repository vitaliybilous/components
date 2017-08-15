import TopicContainer from '../../containers/TopicContainer';
import analyticsExtender from './extendByAnalytics';

export default analyticsExtender(TopicContainer, {
  dataAnalyticsEventCategory : 'Topic articles',
  dataAnalyticsEventAction : 'topic articles click',
  dataAnalyticsEventLabel : 'topic multiple article bottom links',
  dataAnalyticsEventIndex : (props) => props.index
});