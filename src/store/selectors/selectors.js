import {createSelector} from "reselect";
import {NameSpace} from "../reducers/root-reducer";

export const getAllFilms = (state) => {
  return state[NameSpace.DATA].allFilms;
};
export const getAllReviews = (state) => {
  return state[NameSpace.DATA].allReviews;
};

export const getActiveGenre = (state) => {
  return state[NameSpace.DATA].genre;
};

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