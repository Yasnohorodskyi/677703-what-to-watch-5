import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {addToFavorites} from "../../store/action";
import {connect} from "react-redux";

const PromoMovie = (props) => {
  const {
    movieTitle,
    genre,
    releaseDate,
    coverImg,
    filmId,
    addToFavoritesAction,
  } = props;

  const handleAddToFavoritesButtonClick = () => {
    addToFavoritesAction(filmId);
  };

  return (
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={coverImg} alt={movieTitle} width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{movieTitle}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{releaseDate}</span>
          </p>

          <div className="movie-card__buttons">
            <Link to={`/player/${filmId}`}>
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s">
                  </use>
                </svg>
                <span>Play</span>
              </button>
            </Link>
            <button className="btn btn--list movie-card__button" type="button" onClick={handleAddToFavoritesButtonClick}>
              <svg viewBox="0 0 19 20" width="19" height="20"><use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PromoMovie.propTypes = {
  filmId: PropTypes.number.isRequired,
  movieTitle: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  addToFavoritesAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addToFavoritesAction(id) {
    dispatch(addToFavorites(id));
  }
});

export {PromoMovie};
export default connect(null, mapDispatchToProps)(PromoMovie);
