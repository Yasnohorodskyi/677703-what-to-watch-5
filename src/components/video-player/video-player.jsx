import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {
    coverImg,
    src,
    videoRef,
  } = props;

  return (
    <video
      width="280" height="175"
      ref={videoRef}
      poster={`${coverImg}`}
      src={`${src}`}
      muted={`muted`}
    >
      Please use another web browser with video tag support
    </video>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  onVideoMount: PropTypes.func.isRequired,
  videoRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};

export default VideoPlayer;
