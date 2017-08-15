import React, {Component} from 'react';

class CoverImage extends Component {
  render() {
    const { element_name, image_url, small_image_url } = this.props;
    const smallBg = small_image_url ? {
      backgroundImage : `url('${small_image_url}')`
    } : null;
    const className = `${element_name}-container ${ small_image_url ? `${element_name}-container--with-bg` : null}`;

    return (
      <figure className={className} style={smallBg}>
        <img className={`${element_name}-element`} src={image_url}/>
      </figure>
    );
  }
}

export default CoverImage;
