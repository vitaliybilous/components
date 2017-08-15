import React, { Component } from 'react';
import Article from './Article';

class TopicArticles extends Component {
  render() {
    const { articles = [], read_more_text, dataAttributes } = this.props;

    return (
      <section className='topic-articles'>
        {articles.map((article, index) =>
          <Article { ...article} read_more_text={read_more_text} dataAttributes={dataAttributes} key={index} index={index}/>)
        }
      </section>
    );
  }
}

export default TopicArticles;
