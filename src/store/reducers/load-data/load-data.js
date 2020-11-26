import {extend} from "../../../utils.js";
import {ActionType} from "../../action.js";

const adaptFilm = (film) => ({
  id: film[`id`],
  title: film[`name`],
  fullImg: film[`poster_image`],
  coverImg: film[`preview_image`],
  backgroundImage: film[`background_image`],
  backgroundColor: film[`background_color`],
  video: film[`video_link`],
  previewVideoLink: film[`video_link`],
  description: film[`description`],
  rating: film[`rating`],
  scoresCount: film[`scores_count`],
  director: film[`director`],
  starring: film[`starring`],
  duration: film[`run_time`],
  genre: film[`genre`],
  releaseDate: film[`released`],
  isFavorite: film[`is_favorite`],
  similarFilmsID: [3, 7, 9],
});

const adaptComment = (comment) => ({
  id: comment.id,
  userID: comment.user.id,
  userName: comment.user.name,
  rating: comment.rating,
  text: comment.comment,
  date: comment.date,
});

const initialState = {
  allFilms: [],
  filmReviews: [],
  allGenres: [],
  genre: `All genres`,
  genreFilms: [],
  films: {},
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
