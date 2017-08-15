import TopicContainer from '../../containers/TopicContainer';
import analyticsExtender from './extendByAnalytics';

export default analyticsExtender(TopicContainer, {
  dataAnalyticsEventCategory : 'Topic page',
  dataAnalyticsEventAction : 'topic click',
  dataAnalyticsEventLabel : (props) => {
    const { topic_type } = props;

    return `topic ${ topic_type } article`;
  }
});
