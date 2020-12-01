import React from "react";
import PropTypes from "prop-types";
import {filmType} from "../../custom-prop-types";
import {changeActiveGenre} from "../../store/action.js";
import {connect} from "react-redux";
import {
  getGenreFilms, getAllFilms, getActiveGenre,
  getPromo, getAuthorizationStatus, getShortGenresList
} from "../../store/selectors/selectors.js";

import PromoMovie from "../promo-movie/promo-movie";
import GenresList from "../genres-list/genres-list";
import FilmsList from "../films-list/films-list";
import ProfileSignButton from "../profile-sign-button/profile-sign-button";

import withFilmsListHandling from "../../hocs/with-films-list-handling/with-films-list-handling";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const FilmsListWrapped = withFilmsListHandling(withActiveItem(FilmsList));

const MainScreen = (props) => {
  const {
    promo,
    shortGenresList,
    genreFilms,
    activeGenre,
    onGenreChange,
    history,
    authorizationStatus,
  } = props;

  return <React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promo.backgroundImage} alt={promo.title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <ProfileSignButton
          authorizationStatus={authorizationStatus}
        />
      </header>

      <PromoMovie
        promoFilm={promo}
      />
    </section >

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList
          genres={shortGenresList}
          activeGenre={activeGenre}
          onGenreChange={onGenreChange}
        />

        <FilmsListWrapped
          films={genreFilms}
          history={history}
        />
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>;
};

MainScreen.propTypes = {
  promo: PropTypes.shape(filmType).isRequired,
  history: PropTypes.object.isRequired,
  genreFilms: PropTypes.arrayOf(filmType).isRequired,
  onGenreChange: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  shortGenresList: PropTypes.arrayOf(PropTypes.string).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

MainScreen.defaultProps = {
  promo: {},
  genreFilms: [],
  shortGenresList: [],
  authorizationStatus: ``,
};

const mapStateToProps = (state) => ({
  promo: getPromo(state),
  genreFilms: getGenreFilms(state),
  shortGenresList: getShortGenresList(state),
  allFilms: getAllFilms(state),
  activeGenre: getActiveGenre(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(changeActiveGenre(genre));
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
