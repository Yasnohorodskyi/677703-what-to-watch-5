export const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export const changeActiveGenre = (genre) => ({
  type: ActionType.CHANGE_ACTIVE_GENRE,
  genre,
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
