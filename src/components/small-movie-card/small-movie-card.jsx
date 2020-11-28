import React from "react";
import PropTypes from "prop-types";
import {filmType} from "../../custom-prop-types.js";
import VideoPlayer from "../video-player/video-player.jsx";

import withVideoHandling from "../../hocs/with-video-handling/with-video-handling";

const VideoPlayerWrapped = withVideoHandling(VideoPlayer);


const SmallMovieCard = (props) => {

  const {
    film,
    onMouseOver,
    onMovieCardClick,
    onVideoMount,
    startTimer,
    resetTimer,
  } = props;

  const {
    title,
    coverImg,
    id,
    previewVideoLink,
  } = film;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        onMouseOver(id);
        startTimer();
      }}
      onMouseOut={() => {
        resetTimer();
      }}
      onClick={() => {
        onMovieCardClick(id);
      }}
    >
      <div className="small-movie-card__image">
        <VideoPlayerWrapped
          src={previewVideoLink}
          coverImg={coverImg}
          onVideoMount={onVideoMount}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article >
  );
};

SmallMovieCard.propTypes = {
  onMouseOver: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
  onVideoMount: PropTypes.func.isRequired,
  film: PropTypes.shape(filmType),
};

export default SmallMovieCard;
