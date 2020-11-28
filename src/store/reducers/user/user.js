import {AuthorizationStatus} from "../../../const.js";
import {adaptFilm, extend} from "../../../utils.js";
import {ActionType} from "../../action.js";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  favoriteFilms: [],
  lastAddedToFavorites: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_FAVORITES:
      const sourceFavorites = action.payload;
      return extend(state, {
        favoriteFilms: sourceFavorites.map((film) => adaptFilm(film)),
      });
    case ActionType.ADD_TO_FAVORITES:
      return extend(state, {
        lastAddedToFavorites: action.payload,
      });
  }

  return state;
};

export {user};
