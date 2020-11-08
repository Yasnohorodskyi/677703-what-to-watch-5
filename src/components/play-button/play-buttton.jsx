import React from "react";
import PropTypes from "prop-types";

const PlayButton = (props) => {
  const {
    onPlayButtonClick,
    isPlaying,
  } = props;

  return (
    <button type="button" className="player__play" onClick={onPlayButtonClick}>
      {
        isPlaying ? (
          <>
            <svg viewBox="0 0 14 21" width="14" height="21">
              <use xlinkHref="#pause"></use>
            </svg>
            <span>Pause</span>
          </>
        ) : (
          <>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </>
        )
      }
    </button>
  );
};

PlayButton.propTypes = {
  onPlayButtonClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default PlayButton;
