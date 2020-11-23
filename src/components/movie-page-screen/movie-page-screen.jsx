import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {filmType, reviewType} from "../../custom-prop-types";
import {getTabsContent} from "./tabs-content";

import FilmsList from "../films-list/films-list";
import Tabs from "../tabs/tabs";
import {connect} from "react-redux";

import withTabsHandling from "../../hocs/with-tabs-handling/with-tabs-handling";
import withFilmsListHandling from "../../hocs/with-films-list-handling/with-films-list-handling";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {getAllFilms, getFilmReviews, getAuthorizationStatus, getCurrnetFilm, getSimilarFilms} from "../../store/selectors/selectors";
import {fetchFilm, fetchFilmReviews} from "../../store/api-action";
import {AppRoute, AuthorizationStatus} from "../../const";

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

const MoviePageScreen = (props) => {
  const {
    filmReviews,
    currentFilm,
    loadFilmAction,
    loadFilmReviews,
    similarFilms,
    authorizationStatus,
  } = props;
  const filmId = parseInt(props.match.params.id, 10);

  if (!currentFilm) {
    loadFilmAction(filmId);
    return null;
  }

  if (!filmReviews || filmReviews.length === 0) {
    loadFilmReviews(filmId);
    return null;
  }

  const {
    title,
    fullImg,
    genre,
    releaseDate,
  } = currentFilm;

  const tabs = getTabsContent(currentFilm, filmReviews);

  return <React.Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={`${fullImg}`} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <Link to={`/`} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
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
              <Link to={`/mylist`}>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </Link>
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
          history={props.history}
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
};

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
  loadFilmReviews: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  allFilms: getAllFilms(state),
  filmReviews: getFilmReviews(state),
  currentFilm: getCurrnetFilm(state),
  similarFilms: getSimilarFilms(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFilmAction(id) {
    dispatch(fetchFilm(id));
  },
  loadFilmReviews(id) {
    dispatch(fetchFilmReviews(id));
  }
});

export {MoviePageScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePageScreen);
