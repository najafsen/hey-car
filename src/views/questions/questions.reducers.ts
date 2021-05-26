import { createReducer } from "@reduxjs/toolkit";
import { getQuestionsListAction } from "./questions.actions";
import { Question } from "./questions.types";

export interface QuestionsState {
  list: Question[];
}

const initialState: QuestionsState = {
  list: [],
};

export const questionsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getQuestionsListAction.fulfilled, (state, action) => {
    state.list = action.payload.questions;
  });
  builder.addCase(getQuestionsListAction.rejected, (state, action) => {
    // do some error handling!
  });
});
