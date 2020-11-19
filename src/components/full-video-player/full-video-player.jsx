import React from "react";
import PropTypes from "prop-types";

const FullVideoPlayer = (props) => {
  const {
    fullImg,
    src,
    videoRef,
  } = props;

  return (
    <video
      className={`player__video`}
      ref={videoRef}
      poster={`${fullImg}`}
      src={`${src}`}
    >
      Please use another web browser with video tag support
    </video>
  );
};

FullVideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  fullImg: PropTypes.string.isRequired,
  onVideoMount: PropTypes.func.isRequired,
  videoRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  }),
};

export default FullVideoPlayer;
