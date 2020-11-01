export const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  SET_GENRE_FILMS: `SET_GENRE_FILMS`,
};

export const ActionCreator = {
  changeActiveGenre: (genre) => ({
    type: ActionType.CHANGE_ACTIVE_GENRE,
    genre,
  }),
  setGenreFilms: () => {
    return {
      type: ActionType.SET_GENRE_FILMS,
    };
  },
};
