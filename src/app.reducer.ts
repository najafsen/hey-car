import { combineReducers } from "redux";

import { questionsReducer as questions } from "./views/questions/questions.reducer";

export const appReducer = combineReducers({
  questions,
});
