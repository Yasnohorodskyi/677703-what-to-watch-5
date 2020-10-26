import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {filmType} from "../../custom-prop-types.js";
import VideoPlayer from "../video-player/video-player.jsx";

const PLAYING_TIMEOUT = 1000;

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      videoRef: null,
      // timer: null,
    };
    this._timer = null;
  }

  render() {
    const {film, onMouseOver, onMovieCardClick} = this.props;
    const {
      title,
      coverImg,
      id,
      video,
    } = film;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          onMouseOver(id);
          const timer = setTimeout(() => {
            this.state.videoRef.play();
          }, PLAYING_TIMEOUT);
          this._timer = timer;
        }}
        onMouseOut={() => {
          if (this._timer) {
            this.state.videoRef.load();
          }
          clearTimeout(this._timer);
        }}
        onClick={() => {
          onMovieCardClick(id);
        }}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            src={video}
            coverImg={coverImg}
            onVideoMount={(videoRef) => {
              this.setState({videoRef});
            }}
          />
          {/* <img src={`/img/${coverImg}`} alt={title} width="280" height="175" /> */}
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article >
    );
  }
}

SmallMovieCard.propTypes = {
  onMouseOver: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  film: filmType
};

export default SmallMovieCard;
