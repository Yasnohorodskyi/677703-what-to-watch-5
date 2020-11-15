export const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  SET_GENRE_FILMS: `SET_GENRE_FILMS`,
  LOAD_FILMS: `LOAD_FILMS`,
  SET_ALL_GENRES: `SET_ALL_GENRES`,
};

export const changeActiveGenre = (genre) => ({
  type: ActionType.CHANGE_ACTIVE_GENRE,
  genre,
});


export const setGenreFilms = () => ({
  type: ActionType.SET_GENRE_FILMS,
});

export const setAllGenres = () => ({
  type: ActionType.SET_ALL_GENRES,
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});
