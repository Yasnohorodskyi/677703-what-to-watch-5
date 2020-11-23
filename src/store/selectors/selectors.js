import {createSelector} from "reselect";
import {NameSpace} from "../reducers/root-reducer";

export const getRequestError = (state) => {
  return state[NameSpace.STATE].requestError;
};

export const getAllFilms = (state) => {
  return state[NameSpace.DATA].allFilms;
};
export const getAllReviews = (state) => {
  return state[NameSpace.DATA].allReviews;
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
export const getCurrnetFilm = (state) => {
  return state[NameSpace.DATA].film;
};

export const getSimilarFilms = createSelector(
    getAllFilms,
    getCurrnetFilm,
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
