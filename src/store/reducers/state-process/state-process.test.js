import {stateProcess} from "./state-process";
import {ActionType} from "../../action";

import {mockReview} from "../../../const";

const initialState = {
  activeItemId: -1,
  lastPostedComment: null,
  error: null,
};

const mockError = {
  message: `error message`,
  stack: `error stack`,
};

describe(`Should process reducer's updates of "STATE" namespace`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(stateProcess(void 0, {})).toEqual(initialState);
  });

  it(`Reducer should update activeItemId by setActiveItemid`, () => {
    expect(stateProcess({
      activeItemId: -1,
    }, {
      type: ActionType.SET_ACTIVE_ITEM_ID,
      payload: 10
    })).toEqual({
      activeItemId: 10,
    });
  });

  it(`Reducer should update lastPostedComment by postComment`, () => {
    expect(stateProcess({
      lastPostedComment: null,
    }, {
      type: ActionType.POST_COMMENT,
      payload: mockReview
    })).toEqual({
      lastPostedComment: mockReview,
    });
  });

  it(`Reducer should update error by setError`, () => {
    expect(stateProcess({
      error: {},
    }, {
      type: ActionType.SET_ERROR,
      payload: mockError
    })).toEqual({
      error: mockError,
    });
  });

  it(`Reducer should reset error by resetError`, () => {
    expect(stateProcess({
      error: mockError,
    }, {
      type: ActionType.RESET_ERROR,
    })).toEqual({
      error: null,
    });
  });
});
