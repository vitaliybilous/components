import React, {Component} from "react";
import CoverVideo from "../components/covers/CoverVideo";
import CoverImage from "../components/covers/CoverImage";
import ContentMulti from "../components/contents/ContentMulti";
import ContentSingle from "../components/contents/ContentSingle";
import TopicArticles from "../components/article/TopicArticles";

class TopicContainer extends Component {
  getCoverElement() {
    const {has_video_bg, image_url, video_url, is_static, small_image_url} = this.props;

    return has_video_bg
      ? <CoverVideo image_url={image_url} video_url={video_url} element_name='page-topic__cover'/>
      : <CoverImage image_url={image_url} element_name='page-topic__cover'
          small_image_url={is_static ? small_image_url : null}
        />
  }

  getNoneStaticElements() {
    const {topic_title, topic_type, articles = [], single_article, topic_subtitle} = this.props;

    return (
      <div className={`page-topic__content page-topic__content--${ topic_type }`}>
        {this.getContentByType(topic_type, {topic_title, topic_subtitle, block_name: 'page-topic'})}
        {!single_article ? <TopicArticles articles={articles}/> : null}
      </div>
    );
  }

  getContentByType(type, params) {
    switch (type) {
      case 'multi':
        return <ContentMulti { ...params }/>;
      case 'single':
      default:
        return <ContentSingle { ...params }/>;
    }
  }

  render() {
    const {topic_title, topic_type, topic_path, is_static, dataAttribute} = this.props;
    const className = `page-topic ${is_static ? 'page-topic--has-static-image' : ''}`;

    return (
      <section className={className}>
        <a { ...dataAttribute } className={`page-topic__cover page-topic__cover--${topic_type} static_image_class `}
           href={topic_path} title={topic_title}>
          { this.getCoverElement() }
          { !is_static ? this.getNoneStaticElements() : null }
        </a>
      </section>
    );
  }
}

export default TopicContainer;
