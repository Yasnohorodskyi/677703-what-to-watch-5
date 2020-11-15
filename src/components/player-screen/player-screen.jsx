import React from "react";
import PropTypes from "prop-types";
import {filmType} from "../../custom-prop-types";
import {connect} from "react-redux";

import FullVideoPlayer from "../full-video-player/full-video-player.jsx";
import PlayButton from "../play-button/play-buttton";
import TimeElapsed from "../time-elapsed/time-elapsed";

import withVideoHandling from "../../hocs/with-video-handling/with-video-handling";
import withTimeElapsedHandling from "../../hocs/with-time-elapsed-handling/with-time-elapsed-handling";
import {getAllFilms} from "../../store/selectors/selectors";

const FullVideoPlayerWrapped = withVideoHandling(FullVideoPlayer);
const TimeElapsedWrapped = withTimeElapsedHandling(TimeElapsed);


const PlayerScreen = (props) => {
  const {
    allFilms,
    match,
    onVideoMount,
    onPlayButtonClick,
    onFullscreenButtonClick,
    onExitButtonClick,
    isPlaying,
    videoRef,
  } = props;

  const currentId = +match.params.id;
  const currentFilm = allFilms.find((film) => film.id === currentId);
  const {
    fullImg,
    video,
  } = currentFilm;

  return (
    <div className="player">
      <FullVideoPlayerWrapped
        src={video}
        fullImg={`${fullImg}`}
        onVideoMount={onVideoMount}
      />

      <button type="button" className="player__exit" onClick={onExitButtonClick}>
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <TimeElapsedWrapped
            videoRef={videoRef}
          />
        </div>

        <div className="player__controls-row">
          <PlayButton
            isPlaying={isPlaying}
            onPlayButtonClick={onPlayButtonClick}
          />

          <div className="player__name">
            {currentFilm.title}
          </div>

          <button type="button" className="player__full-screen"
            onClick={onFullscreenButtonClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div >
    </div >
  );
};

PlayerScreen.propTypes = {
  allFilms: PropTypes.arrayOf(filmType).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
  onVideoMount: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onFullscreenButtonClick: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  videoRef: PropTypes.object,
};


const mapStateToProps = (state) => ({
  allFilms: getAllFilms(state),
});

export {PlayerScreen};
export default connect(mapStateToProps)(PlayerScreen);
