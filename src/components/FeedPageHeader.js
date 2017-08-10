import React, { Component }from 'react';

/*
const defaultProps: Props = {
  block_name: 'block_name',
  page_type: 'page_type',
  site: 'site',
  container_class: 'container_class',
  title_class: 'title_class',
  feed_name_modifier: 'feed_name_modifier',
  logo_path: 'logo_path',
  title: 'title',
  rss_path: 'rss_path',
  rss_class: 'rss_class',
  feed_name: 'feed_name',
  rss_link: 'rss_link'
};*/

class FeedPageHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      block_name,
      page_type,
      site,
      container_class,
      title_class,
      feed_name_modifier,
      logo_path,
      title,
      rss_path,
      rss_class,
      feed_name,
      rss_link } = this.props;
    const inline_style = logo_path ? `background-image : url('${ logo_path }')` : null;
    const title_classnames =
      `${title_class} ${ title_class }--${ feed_name_modifier } ${inline_style ? `${ title_class }--has-logo` : ''}`;

    return (
      <section className={`${block_name} ${block_name }--${page_type } ${block_name }--${site }`}>
        <div className={`${container_class} ${ container_class }--${ page_type }`}>
          <h1 className={title_classnames} style={{inline_style}}>
            {title}
          </h1>
          { rss_path
            ? <a className={`${rss_class} ${ rss_class }--${feed_name }`} href={rss_path}>{rss_link}</a>
            : null
          }
        </div>
      </section>
    );
  }
}

export default FeedPageHeader;
