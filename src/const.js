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

export const mockFilm = {
  id: 1,
  title: `The Grand Budapest Hotel`,
  fullImg: `img/the-grand-budapest-hotel-poster.jpg`,
  coverImg: `img/the-grand-budapest-hotel.jpg`,
  backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
  backgroundColor: `#ffffff`,
  video: `https://some-link`,
  previewVideoLink: `https://some-link`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular       European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  rating: 8.9,
  scoresCount: 240,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  duration: 99,
  genre: `Comedy`,
  releaseDate: 2014,
  isFavorite: false,
};

export const mockReview = {
  id: 1,
  userID: 4,
  userName: `Kate Muir`,
  rating: 8.9,
  text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  date: `2019-05-08T14:13:56.569Z`,
};

export const mockGenres = [`All genres`, `Comedy`, `Adventure`, `Triller`];

export const mockMatchParamsId = {
  params: {
    id: `1`,
  }
};

export const mockTab = {
  id: `Overview`,
  title: `Overview`,
  render: () => {}
};
