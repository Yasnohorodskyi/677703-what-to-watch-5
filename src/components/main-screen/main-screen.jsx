import React from "react";
import PropTypes from "prop-types";
import {filmType} from "../../custom-prop-types";
import {changeActiveGenre} from "../../store/action.js";
import {connect} from "react-redux";
import {getGenreFilms, getAllFilms, getActiveGenre, getAllGenres} from "../../store/selectors/selectors.js";

import PromoMovie from "../promo-movie/promo-movie";
import GenresList from "../genres-list/genres-list";
import FilmsList from "../films-list/films-list";

import withFilmsListHandling from "../../hocs/with-films-list-handling/with-films-list-handling";
import withActiveItem from "../../hocs/with-active-item/with-active-item";


const FilmsListWrapped = withFilmsListHandling(withActiveItem(FilmsList));

const MainScreen = (props) => {
  const {
    movieTitle,
    genre,
    releaseDate,
    allGenres,
    genreFilms,
    activeGenre,
    onGenreChange,
    history,
  } = props;

  return <React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
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

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <PromoMovie
        movieTitle={movieTitle}
        genre={genre}
        releaseDate={releaseDate}
      />
    </section >

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList
          genres={allGenres}
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
  movieTitle: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
  genreFilms: PropTypes.arrayOf(filmType).isRequired,
  onGenreChange: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  allGenres: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = (state) => ({
  genreFilms: getGenreFilms(state),
  allGenres: getAllGenres(state),
  allFilms: getAllFilms(state),
  activeGenre: getActiveGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(changeActiveGenre(genre));
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
