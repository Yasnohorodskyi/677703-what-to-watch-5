export const RatingDesc = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
};

export const PostStatus = {
  SUCCESS: `SUCCESS`,
  FAIL: `FAIL`,
};

export const DEFAULT_RENDERED_FILMS_COUNT = 8;
export const SHOW_MORE_FILMS_COUNT = 8;
export const PLAYING_TIMEOUT = 1000;

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const MyList = {
  ADD: 1,
  DELETE: 0,
};

export const AppRoute = {
  LOGIN: `/login`,
  ROOT: `/`,
  MYLIST: `/mylist`,
  FILMS_ID: `/films/:id`,
  PLAYER_ID: `/player/:id`,
  REVIEW_ID: `/films/:id/review`,
  ERROR: `/error`,
};

export const APIRoute = {
  FILMS: `/films`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  PROMO: `/films/promo`,
  FAVORITE: `/favorite`,
};

export const emptyFilm = {
  id: -1,
  title: ``,
  fullImg: ``,
  coverImg: ``,
  backgroundImage: ``,
  backgroundColor: ``,
  video: ``,
  previewVideoLink: ``,
  description: ``,
  rating: -1,
  scoresCount: -1,
  starring: [],
  duration: -1,
  genre: 1,
  releaseDate: -1,
  isFavorite: false,
  similarFilmsID: [],
};
