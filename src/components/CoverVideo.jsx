import React, {Component} from "react";

class CoverVideo extends Component {
  render() {
    const {element_name, image_url, video_url} = this.props;

    return (
      <div className={`${element_name}-container`} data-video-src={video_url}>
        <video className={`${element_name}-element`} poster={`${image_url}`} muted autoPlay loop>
          Your browser does not support the video tag.
        </video>
        <script dangerouslySetInnerHTML={{__html:`
          (function() {
            if (window.matchMedia('(min-width: 1024px)').matches) {
              var container = document.querySelector('.${element_name}-container');
              var element = container.querySelector('.${element_name}-element');
              element.src = container.dataset.videoSrc;
            }
          })();
        `}}/>
      </div>
    );
  }
}

export default CoverVideo;