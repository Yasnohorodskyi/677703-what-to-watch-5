import {postComment, redirectToRoute, setRequestError} from "./action.js";
import {APIRoute, AppRoute, AuthorizationStatus} from "../const.js";
import {loadFilms, loadFilm, requireAuthorization, loadPromo} from "./action.js";

const handleError = (dispatch, error) => {
  dispatch(setRequestError(error));
  dispatch(redirectToRoute(AppRoute.ERROR));
};

export const fetchFilmsList = () => (dispatch, __getState, api) => (
  api.get(`/films`)
      .then(({data}) => dispatch(loadFilms(data)))
      .catch((error) => {
        handleError(dispatch, error);
      })
);

export const fetchFilm = (id) => (dispatch, __getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => dispatch(loadFilm(data)))
    .catch((error) => {
      handleError(dispatch, error);
    })
);

export const fetchPromo = () => (dispatch, __getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(loadPromo(data)))
    .catch((error) => {
      handleError(dispatch, error);
    })
);

export const addReview = (filmId, rating, comment) => (dispatch, __getState, api) => (
  api.post(`/comments/${filmId}`, {rating, comment})
    .then(() => dispatch(postComment({rating, comment})))
    .catch((error) => {
      handleError(dispatch, error);
    })
);

export const checkAuth = () => (dispatch, __getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
    .catch((error) => {
      handleError(dispatch, error);
    })
);

export const login = ({login: email, password}) => (dispatch, __getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch((error) => {
      handleError(dispatch, error);
    })
);

export const logout = () => (dispatch, __getState, api) => (
  api.get(APIRoute.LOGOUT)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
    .catch((error) => {
      handleError(dispatch, error);
    })
);
