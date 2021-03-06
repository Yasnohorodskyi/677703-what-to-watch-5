import {createSelector} from "reselect";
import {NameSpace} from "../reducers/root-reducer";

const MAX_GENRES_NUMBER = 9;

export const getError = (state) => {
  return state[NameSpace.STATE].error;
};

export const getPromo = (state) => {
  return state[NameSpace.DATA].promo;
};

export const getAllFilms = (state) => {
  return state[NameSpace.DATA].allFilms;
};
export const getFilmReviews = (state) => {
  return state[NameSpace.DATA].filmReviews;
};

export const getActiveItemId = (state) => {
  return state[NameSpace.STATE].activeItemId;
};

export const getActiveGenre = (state) => {
  return state[NameSpace.DATA].genre;
};

export const getAuthorizationStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};
export const getCurrentFilm = (state) => {
  return state[NameSpace.DATA].film;
};
export const getFavoriteFilms = (state) => {
  return state[NameSpace.USER].favoriteFilms;
};

export const getLastAddedToFavorite = (state) => {
  return state[NameSpace.USER].lastAddedToFavorites;
};

export const getSimilarFilms = createSelector(
    getAllFilms,
    getCurrentFilm,
    (allfilms, currentFilm) => {
      if (!currentFilm) {
        return [];
      }
      return allfilms.filter((film) => film.genre === currentFilm.genre);
    }
);

export const getAllGenres = createSelector(
    getAllFilms,
    (allFilms) => {
      const genres = [`All genres`];

      if (allFilms.length === 0) {
        return genres;
      }

      allFilms.forEach((film) => {
        if (!genres.includes(film.genre)) {
          genres.push(film.genre);
        }
      });

      return genres;
    }
);

export const getShortGenresList = createSelector(
    getAllGenres,
    (allGenres) => {
      return allGenres.slice(0, MAX_GENRES_NUMBER);
    }
);

export const getGenreFilms = createSelector(
    getAllFilms,
    getActiveGenre,
    (allFilms, genre) => {
      if (!genre || genre === `All genres`) {
        return allFilms;
      }

      return allFilms.filter((film) => film.genre === genre);
    }
);
