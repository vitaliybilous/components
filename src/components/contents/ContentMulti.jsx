import React, {Component} from 'react';

class ContentMulti extends Component {
  render() {
    const {block_name, topic_title, topic_subtitle} = this.props;
    const element_component_name = `${block_name }__multi`;

    return (
      <div className={element_component_name}>
        <p className={`${element_component_name}-title`}>
          {topic_title}
        </p>
        <p className={`${element_component_name}-subtitle`}>
          {topic_subtitle}
        </p>
      </div>
    );
  }
}

export default ContentMulti;
