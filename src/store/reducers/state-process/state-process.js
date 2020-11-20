import {extend} from "../../../utils.js";
import {ActionType} from "../../action.js";

const initialState = {
  activeItemId: -1,
};

const stateProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_ITEM_ID:
      return extend(state, {
        activeItemId: action.payload,
      });
  }

  return state;
};

export {stateProcess};
