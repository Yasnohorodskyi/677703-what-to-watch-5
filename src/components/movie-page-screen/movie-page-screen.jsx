import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {filmType, reviewType} from "../../custom-prop-types";
import {getTabsContent} from "./tabs-content";
import {connect} from "react-redux";

import FilmsList from "../films-list/films-list";
import Tabs from "../tabs/tabs";
import AddToMylistButton from "../add-to-mylist-button/add-to-mylist-button";
import ProfileSignButton from "../profile-sign-button/profile-sign-button";

import withTabsHandling from "../../hocs/with-tabs-handling/with-tabs-handling";
import withFilmsListHandling from "../../hocs/with-films-list-handling/with-films-list-handling";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {
  getAllFilms, getFilmReviews, getAuthorizationStatus, getCurrentFilm,
  getSimilarFilms, getFavoriteFilms, getLastAddedToFavorite
} from "../../store/selectors/selectors";
import {fetchFilm, fetchFilmReviews, addToFavoriteList, fetchFavoriteList} from "../../store/api-action";
import {AppRoute, AuthorizationStatus, MyList} from "../../const";
import {isObjEmpty} from "../../utils";

const FilmsListWrapped = withFilmsListHandling(withActiveItem(FilmsList));
const TabsWrapped = withTabsHandling(Tabs);

const showReviewButton = (authorizationStatus, filmId) => {
  return (
    authorizationStatus === AuthorizationStatus.AUTH ?
      <Link to={`/films/${filmId}/review`} className="btn movie-card__button">Add review</Link>
      :
      ``
  );
};

const checkInFavoriteFilms = (favoriteFilms, filmId) => {
  if (!favoriteFilms || favoriteFilms.length === 0) {
    return false;
  }
  return favoriteFilms.map((film) => film.id)
    .includes(filmId);
};

class MoviePageScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.handleAddToFarovitesButtonClick = this.handleAddToFarovitesButtonClick.bind(this);
  }

  componentDidMount() {
    const {
      currentFilm,
      filmReviews,
      loadFilmAction,
      loadFilmReviewsAction,
      loadFavoriteListAction,
      favoriteFilms,
      match,
    } = this.props;
    const filmId = parseInt(match.params.id, 10);

    if (!currentFilm || isObjEmpty(currentFilm)) {
      loadFilmAction(filmId);
    }

    if (!filmReviews || isObjEmpty(filmReviews)) {
      loadFilmReviewsAction(filmId);
    }

    if (favoriteFilms || isObjEmpty(favoriteFilms)) {
      loadFavoriteListAction();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.lastAddedToFavorites !== this.props.lastAddedToFavorites) {
      this.props.loadFavoriteListAction();
    }
  }

  handleAddToFarovitesButtonClick() {
    const {
      addToFavoritesAction,
      favoriteFilms,
      match,
      loadFavoriteListAction,
    } = this.props;
    const filmId = parseInt(match.params.id, 10);
    const status = checkInFavoriteFilms(favoriteFilms, filmId) ? MyList.DELETE : MyList.ADD;

    addToFavoritesAction(filmId, status);
    loadFavoriteListAction();
  }

  render() {
    const {
      filmReviews,
      currentFilm,
      similarFilms,
      authorizationStatus,
      match,
      history,
      favoriteFilms,
    } = this.props;
    const filmId = parseInt(match.params.id, 10);
    const isInFavoriteFilms = checkInFavoriteFilms(favoriteFilms, filmId);

    const tabs = getTabsContent(currentFilm, filmReviews);
    const {
      title,
      fullImg,
      genre,
      releaseDate,
    } = currentFilm;

    return <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={`${fullImg}`} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to={AppRoute.ROOT} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>
            <ProfileSignButton
              authorizationStatus={authorizationStatus}
            />
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseDate}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`/player/${filmId}`}>
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                <AddToMylistButton
                  isInList={isInFavoriteFilms}
                  onClick={this.handleAddToFarovitesButtonClick}
                />
                {showReviewButton(authorizationStatus, filmId)}
              </div>
            </div>
          </div>
        </div >

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={fullImg} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <TabsWrapped
                tabs={tabs}
              />
            </div>
          </div>
        </div>
      </section >

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsListWrapped
            films={similarFilms.slice(0, 4)}
            history={history}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>;
  }
}

MoviePageScreen.propTypes = {
  allFilms: PropTypes.arrayOf(filmType).isRequired,
  filmReviews: PropTypes.arrayOf(reviewType),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
  history: PropTypes.object,
  currentFilm: PropTypes.shape(filmType),
  similarFilms: PropTypes.arrayOf(PropTypes.shape(filmType)).isRequired,
  loadFilmAction: PropTypes.func.isRequired,
  loadFilmReviewsAction: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  addToFavoritesAction: PropTypes.func.isRequired,
  favoriteFilms: PropTypes.arrayOf(PropTypes.shape(filmType)),
  loadFavoriteListAction: PropTypes.func.isRequired,
  lastAddedToFavorites: PropTypes.shape(filmType),
};

MoviePageScreen.defaultProps = {
  currentFilm: {},
  filmReviews: {},
  favoriteFilms: [],
};

const mapStateToProps = (state) => ({
  allFilms: getAllFilms(state),
  filmReviews: getFilmReviews(state),
  currentFilm: getCurrentFilm(state),
  similarFilms: getSimilarFilms(state),
  authorizationStatus: getAuthorizationStatus(state),
  favoriteFilms: getFavoriteFilms(state),
  lastAddedToFavorites: getLastAddedToFavorite(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFilmAction(id) {
    dispatch(fetchFilm(id));
  },
  loadFilmReviewsAction(id) {
    dispatch(fetchFilmReviews(id));
  },
  addToFavoritesAction(id, status) {
    dispatch(addToFavoriteList(id, status));
  },
  loadFavoriteListAction() {
    dispatch(fetchFavoriteList());
  }
});

export {MoviePageScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePageScreen);
