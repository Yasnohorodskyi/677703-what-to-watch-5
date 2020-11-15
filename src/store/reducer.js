import {extend} from "../utils.js";
import {ActionType} from "./action.js";
// import allFilms from "../mocks/films.js";
import allReviews from "../mocks/reviews.js";

const getGenres = (films) => {
  const genres = [`All genres`];

  films.forEach((film) => {
    if (!genres.includes(film.genre)) {
      genres.push(film.genre);
    }
  });

  return genres;
};

const allGenres = getGenres(allFilms);

const initialState = {
  genre: `All genres`,
  allFilms: [],
  allGenres: [],
  allReviews: [],
  genreFilms: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return extend(state, {
        genre: action.genre
      });
    case ActionType.SET_GENRE_FILMS:
      if (!state.genre || state.genre === `All genres`) {
        return extend(state, {
          genreFilms: allFilms,
        });
      }
      const genreFilms = allFilms.filter((film) => film.genre === state.genre);

      return extend(state, {
        genreFilms,
      });
  }

  return state;
};

export {reducer};
