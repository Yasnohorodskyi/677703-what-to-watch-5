import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const PromoMovie = (props) => {
  const {movieTitle, genre, releaseDate} = props;

  return (
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{movieTitle}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{releaseDate}</span>
          </p>

          <div className="movie-card__buttons">
            <Link to="/player/3">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s">
                  </use>
                </svg>
                <span>Play</span>
              </button>
            </Link>
            <Link to="/mylist">
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20"><use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

PromoMovie.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
};

export default PromoMovie;
