import {AuthorizationStatus} from "../../../const.js";
import {extend} from "../../../utils.js";
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
      return extend(state, {
        favoriteFilms: action.payload,
      });
    case ActionType.ADD_TO_FAVORITES:
      return extend(state, {
        lastAddedToFavorites: action.payload,
      });
  }

  return state;
};

export {user};
