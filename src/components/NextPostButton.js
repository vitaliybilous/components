import React, { Component } from 'react';

class NextPostButton extends Component {
  render() {
    const { modifier, text_header, link_url, text_title, dataAttribute } = this.props;

    return (
      <a { ...dataAttribute }
        className={`next-post-button next-post-button--${modifier}`}
        href={link_url}
      >
        <div className="next-post-button__texts">
          <span className="next-post-button__texts__header">
            {text_header}
            <div className="next-post-button__texts__title">
              {text_title}
            </div>
          </span>
        </div>
      </a>
    );
  }
}

export default NextPostButton;
