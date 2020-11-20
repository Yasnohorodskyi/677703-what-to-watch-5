import {postComment, redirectToRoute} from "./action.js";
import {AuthorizationStatus} from "../const.js";
import {loadFilms, loadFilm, requireAuthorization} from "./action.js";

export const fetchFilmsList = () => (dispatch, __getState, api) => (
  api.get(`/films`)
      .then(({data}) => dispatch(loadFilms(data)))
);

export const fetchFilm = (id) => (dispatch, __getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => dispatch(loadFilm(data)))
);

export const addReview = (filmId, rating, comment) => (dispatch, __getState, api) => (
  api.post(`/comments/${filmId}`, {rating, comment})
    .then(() => dispatch(postComment({rating, comment})))
);

export const checkAuth = () => (dispatch, __getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, __getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
);

export const logout = () => (dispatch, __getState, api) => (
  api.get(`/logout`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
);
