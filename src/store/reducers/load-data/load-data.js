import {extend} from "../../../utils.js";
import {ActionType} from "../../action.js";
import allReviews from "../../../mocks/reviews.js";

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

const initialState = {
  allFilms: [],
  allReviews,
  allGenres: [],
  genre: `All genres`,
  genreFilms: [],
};

const loadData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      const sourceFilms = action.payload;
      const allFilms = sourceFilms.map((film) => adaptFilm(film));

      return extend(state, {
        allFilms,
      });
    case ActionType.CHANGE_ACTIVE_GENRE:
      return extend(state, {
        genre: action.genre
      });
  }

  return state;
};

export {loadData};
