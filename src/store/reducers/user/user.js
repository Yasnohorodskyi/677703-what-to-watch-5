import {AuthorizationStatus} from "../../../const.js";
import {ActionType} from "../../action.js";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
  }

  return state;
};

export {user};
