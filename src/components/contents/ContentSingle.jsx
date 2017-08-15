import React, {Component} from 'react';

class ContentSingle extends Component {
  render() {
    const {block_name, read_more_text, topic_title} = this.props;
    const element_component_name = `${block_name }__single-title`;

    return (
      <div className=${element_component_name} data-read-more-text={read_more_text}>
        <h2 className={`${ element_component_name }-header`}>
          {topic_title}
        </h2>
      </div>
    );
  }
}

export default ContentSingle;
