export const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_FILM: `LOAD_FILM`,
  LOAD_PROMO: `LOAD_PROMO`,
  POST_COMMENT: `POST_COMMENT`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SET_ACTIVE_ITEM_ID: `SET_ACTIVE_ITEM_ID`,
  SET_ERROR: `SET_ERROR`,
  RESET_ERROR: `RESET_ERROR`,
  RESET_FILM: `RESET_FILM`,
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

export const loadPromo = (film) => ({
  type: ActionType.LOAD_PROMO,
  payload: film,
});

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
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

export const setError = (error) => ({
  type: ActionType.SET_ERROR,
  payload: error,
});
export const resetError = () => ({
  type: ActionType.RESET_ERROR,
});

export const resetFilm = () => ({
  type: ActionType.RESET_FILM,
});
