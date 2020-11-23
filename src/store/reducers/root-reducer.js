import {combineReducers} from "redux";
import {stateProcess} from "./state-process/state-process.js";
import {loadData} from "./load-data/load-data.js";
import {user} from "./user/user.js";

export const NameSpace = {
  DATA: `DATA`,
  STATE: `STATE`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: loadData,
  [NameSpace.STATE]: stateProcess,
  [NameSpace.USER]: user,
});
