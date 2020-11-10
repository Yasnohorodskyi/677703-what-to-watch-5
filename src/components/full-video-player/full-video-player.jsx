import React from "react";
import PropTypes from "prop-types";

const FullVideoPlayer = (props) => {
  const {
    coverImg,
    src,
    videoRef,
  } = props;

  return (
    <video
      className={`player__video`}
      ref={videoRef}
      poster={`/img/${coverImg}`}
      src={`${src}`}
    >
      Please use another web browser with video tag support
    </video>
  );
};

FullVideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  onVideoMount: PropTypes.func.isRequired,
  videoRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  }),
};

export default FullVideoPlayer;
