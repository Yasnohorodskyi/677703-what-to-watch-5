import {combineReducers} from "redux";
import {stateProcess} from "./state-process/state-process.js";
import {loadData} from "./load-data/load-data.js";

export const NameSpace = {
  DATA: `DATA`,
  STATE: `STATE`,
};

export default combineReducers({
  [NameSpace.DATA]: loadData,
  [NameSpace.STATE]: stateProcess,
});
