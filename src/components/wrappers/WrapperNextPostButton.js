import NextPostButton from '../buttons/NextPostButton';
import analyticsExtender from './extendByAnalytics';

export default analyticsExtender(NextPostButton, {
  dataAnalyticsEventCategory : 'Article page',
  dataAnalyticsEventAction : 'article click',
  dataAnalyticsEventLabel : (props) => {
    const { modifier } = props;
    return (modifier === 'header')
      ? 'top menu arrow'
      : (modifier === 'body')
        ? 'side arrow'
        : '';
  }
});
