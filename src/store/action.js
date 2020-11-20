export const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_FILM: `LOAD_FILM`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SET_ACTIVE_ITEM_ID: `SET_ACTIVE_ITEM_ID`,
};

export const setActiveItemId = (id) => ({
  type: ActionType.SET_ACTIVE_ITEM_ID,
  payload: id,
});
export const changeActiveGenre = (genre) => ({
  type: ActionType.CHANGE_ACTIVE_GENRE,
  payload: genre,
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});
export const loadFilm = (film) => ({
  type: ActionType.LOAD_FILM,
  payload: film,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
