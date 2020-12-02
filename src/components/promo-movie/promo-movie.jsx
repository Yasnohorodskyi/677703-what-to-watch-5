import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import AddToMyListButton from "../add-to-mylist-button/add-to-mylist-button";
import {connect} from "react-redux";
import {filmType} from "../../custom-prop-types";
import {getFavoriteFilms, getLastAddedToFavorite} from "../../store/selectors/selectors";
import {addToFavoriteList, fetchFavoriteList} from "../../store/api-action";
import {MyList} from "../../const";

const checkInFavoriteFilms = (favoriteFilms, filmId) => {
  if (!favoriteFilms || favoriteFilms.length === 0) {
    return false;
  }
  return favoriteFilms.map((film) => film.id)
    .includes(filmId);
};

class PromoMovie extends PureComponent {
  constructor(props) {
    super(props);

    this.handleAddToFavoritesButtonClick = this.handleAddToFavoritesButtonClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.lastAddedToFavorites !== this.props.lastAddedToFavorites) {
      this.props.loadFavoriteListAction();
    }
  }

  handleAddToFavoritesButtonClick() {
    const {
      addToFavoritesAction,
      favoriteFilms,
      promoFilm,
      loadFavoriteListAction,
    } = this.props;

    const status = checkInFavoriteFilms(favoriteFilms, promoFilm.id) ? MyList.DELETE : MyList.ADD;

    addToFavoritesAction(promoFilm.id, status);
    loadFavoriteListAction();
  }

  render() {
    const {
      promoFilm,
      favoriteFilms,
    } = this.props;

    const {
      movieTitle, genre, releaseDate,
      coverImg, id,
    } = promoFilm;


    const isInFavoriteFilms = checkInFavoriteFilms(favoriteFilms, id);

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
              <Link to={`/player/${id}`}>
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s">
                    </use>
                  </svg>
                  <span>Play</span>
                </button>
              </Link>
              <AddToMyListButton
                isInList={isInFavoriteFilms}
                onClick={this.handleAddToFavoritesButtonClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

PromoMovie.propTypes = {
  promoFilm: PropTypes.shape(filmType).isRequired,
  addToFavoritesAction: PropTypes.func.isRequired,
  favoriteFilms: PropTypes.arrayOf(PropTypes.shape(filmType)),
  loadFavoriteListAction: PropTypes.func.isRequired,
  lastAddedToFavorites: PropTypes.shape(filmType),
};

const mapStateToProps = (state) => ({
  favoriteFilms: getFavoriteFilms(state),
  lastAddedToFavorites: getLastAddedToFavorite(state),
});

const mapDispatchToProps = (dispatch) => ({
  addToFavoritesAction(filmId, status) {
    dispatch(addToFavoriteList(filmId, status));
  },
  loadFavoriteListAction() {
    dispatch(fetchFavoriteList());
  }
});

export {PromoMovie};
export default connect(mapStateToProps, mapDispatchToProps)(PromoMovie);
