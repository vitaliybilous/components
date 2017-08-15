import React, {Component }from 'react';

class FeedPageHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {block_name, page_type, site, container_class, title_class, feed_name_modifier, logo_path, title, rss_path,
      rss_class, feed_name, rss_link} = this.props;
    const inlineStyle = logo_path ? `background-image : url('${logo_path}')` : null;
    const titleClassNames =
      `${title_class} ${title_class}--${feed_name_modifier} ${inlineStyle ? `${title_class}--has-logo` : ''}`;

    return (
      <section className={`${block_name} ${block_name}--${page_type} ${block_name}--${site}`}>
        <div className={`${container_class} ${container_class}--${page_type}`}>
          <h1 className={titleClassNames} style={{inlineStyle}}>
            {title}
          </h1>
          {rss_path
            ? <a className={`${rss_class} ${rss_class}--${feed_name}`} href={rss_path}>{rss_link}</a>
            : null
          }
        </div>
      </section>
    );
  }
}

export default FeedPageHeader;
