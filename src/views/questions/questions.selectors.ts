import { createSelector } from "reselect";
import { RootState } from "../../app.store";

export const selectQuestions = (state: RootState) => state.questions;
export const selectQuestionId = (state: RootState, id: string) => id;

export const selectQuestionsList = (state: RootState) =>
  selectQuestions(state).list;

export const selectQuestionById = createSelector(
  [selectQuestionsList, selectQuestionId],
  (questions, questionId) =>
    questions.find((question) => question.url === `/questions/${questionId}`)
);
