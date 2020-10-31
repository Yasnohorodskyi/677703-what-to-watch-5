import React from "react";
import PropTypes from "prop-types";
import {filmType} from "../../custom-prop-types";
import {Link} from "react-router-dom";
import {ActionCreator} from "../../store/action.js";

import GenresList from "../genres-list/genres-list";
import FilmsList from "../films-list/films-list";
import {connect} from "react-redux";


const getGenres = (films) => {
  const genres = [`All genres`];

  films.forEach((film) => {
    if (!genres.includes(film.genre)) {
      genres.push(film.genre);
    }
  });

  return genres;
};

const MainScreen = (props) => {
  const {
    movieTitle,
    genre,
    releaseDate,
    allFilms,
    genreFilms,
    activeGenre,
    onGenreChange,
    history,
  } = props;

  const genres = getGenres(allFilms);

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
    </section >

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList
          genres={genres}
          activeGenre={activeGenre}
          onGenreChange={onGenreChange}
        />

        <FilmsList
          films={genreFilms}
          history={history}
        />

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
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
  allFilms: PropTypes.arrayOf(filmType).isRequired,
  history: PropTypes.object.isRequired,
  genreFilms: PropTypes.arrayOf(filmType).isRequired,
  onGenreChange: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  genreFilms: state.genreFilms,
  allFilms: state.allFilms,
  activeGenre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(ActionCreator.changeActiveGenre(genre));
    dispatch(ActionCreator.setGenreFilms(genre));
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
