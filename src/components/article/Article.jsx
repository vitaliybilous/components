import React, {Component} from 'react';

class Article extends Component {
  render() {
    const {path, title, author_image, read_more_text, dataAttribute} = this.props;

    return (
      <div className='topic-articles__link-container'>
        <a { ...dataAttribute } className='topic-articles__link' href={path} title={title}>
          <h2 className='topic-articles__header' data-read-more-text={read_more_text}>
            <p className='topic-articles__text' data-ellipsis={title}>
              {title}
            </p>
            <img className='topic-articles__thumbnail' alt={title} src={author_image}/>
          </h2>
        </a>
      </div>
    );
  }
}

export default Article;
