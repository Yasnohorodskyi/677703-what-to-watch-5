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
    case ActionType.POST_COMMENT:
      return extend(state, {
        lastPostedComment: action.payload
      });
    case ActionType.SET_REQUEST_ERROR:
      return extend(state, {
        requestError: action.payload
      });
  }

  return state;
};

export {stateProcess};
