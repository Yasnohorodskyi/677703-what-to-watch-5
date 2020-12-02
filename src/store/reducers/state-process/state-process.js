import {extend} from "../../../utils.js";
import {ActionType} from "../../action.js";

const initialState = {
  activeItemId: -1,
  lastPostedComment: null,
  error: null,
};

const stateProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_ITEM_ID:
      return extend(state, {
        activeItemId: action.payload,
      });
    case ActionType.POST_COMMENT:
      return extend(state, {
        lastPostedComment: action.payload
      });
    case ActionType.SET_ERROR:
      return extend(state, {
        error: action.payload
      });
    case ActionType.RESET_ERROR:
      return extend(state, {
        error: null,
      });
  }

  return state;
};

export {stateProcess};
