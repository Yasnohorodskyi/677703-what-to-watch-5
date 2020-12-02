import {extend, adaptComment, adaptFilm} from "../../../utils.js";
import {ActionType} from "../../action.js";


const initialState = {
  allFilms: [],
  filmReviews: [],
  allGenres: [],
  genre: `All genres`,
  genreFilms: [],
  film: {},
  promo: {},
};

const loadData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      const sourceFilms = action.payload;
      const allFilms = sourceFilms.map((film) => adaptFilm(film));

      return extend(state, {
        allFilms,
      });
    case ActionType.LOAD_FILM:
      return extend(state, {
        film: adaptFilm(action.payload)
      });
    case ActionType.LOAD_PROMO:
      return extend(state, {
        promo: adaptFilm(action.payload)
      });
    case ActionType.CHANGE_ACTIVE_GENRE:
      return extend(state, {
        genre: action.payload
      });
    case ActionType.LOAD_COMMENTS:
      const sourceComments = action.payload;
      const reviews = sourceComments.map((comment) => adaptComment(comment));
      return extend(state, {
        filmReviews: reviews,
      });
    case ActionType.RESET_FILM:
      return extend(state, {
        film: {},
        filmReviews: [],
      });
  }

  return state;
};

export {loadData};
