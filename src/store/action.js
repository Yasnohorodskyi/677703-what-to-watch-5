export const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_FILM: `LOAD_FILM`,
  POST_COMMENT: `POST_COMMENT`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SET_ACTIVE_ITEM_ID: `SET_ACTIVE_ITEM_ID`,
  SET_REQUEST_ERROR: `SET_REQUEST_ERROR`,
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

export const postComment = (comment) => ({
  type: ActionType.POST_COMMENT,
  payload: comment
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const setRequestError = (error) => ({
  type: ActionType.SET_REQUEST_ERROR,
  payload: error,
});
