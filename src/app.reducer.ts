import { combineReducers } from "redux";

import { questionsReducer as questions } from "./views/questions/questions.reducers";

export const appReducer = combineReducers({
  questions,
});
