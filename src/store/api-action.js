import {postComment, redirectToRoute, setRequestError} from "./action.js";
import {APIRoute, AppRoute, AuthorizationStatus} from "../const.js";
import {loadFilms, loadFilm, requireAuthorization} from "./action.js";

export const fetchFilmsList = () => (dispatch, __getState, api) => (
  api.get(`/films`)
      .then(({data}) => dispatch(loadFilms(data)))
      .catch((error) => {
        dispatch(setRequestError(error));
        dispatch(redirectToRoute(AppRoute.ERROR));
      })
);

export const fetchFilm = (id) => (dispatch, __getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => dispatch(loadFilm(data)))
    .catch((error) => {
      dispatch(setRequestError(error));
      dispatch(redirectToRoute(AppRoute.ERROR));
    })
);

export const addReview = (filmId, rating, comment) => (dispatch, __getState, api) => (
  api.post(`/comments/${filmId}`, {rating, comment})
    .then(() => dispatch(postComment({rating, comment})))
    .catch((error) => {
      dispatch(setRequestError(error));
      dispatch(redirectToRoute(AppRoute.ERROR));
    })
);

export const checkAuth = () => (dispatch, __getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
    .catch((error) => {
      dispatch(setRequestError(error));
      dispatch(redirectToRoute(AppRoute.ERROR));
    })
);

export const login = ({login: email, password}) => (dispatch, __getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch((error) => {
      dispatch(setRequestError(error));
      dispatch(redirectToRoute(AppRoute.ERROR));
    })
);

export const logout = () => (dispatch, __getState, api) => (
  api.get(APIRoute.LOGOUT)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
    .catch((error) => {
      dispatch(setRequestError(error));
      dispatch(redirectToRoute(AppRoute.ERROR));
    })
);
