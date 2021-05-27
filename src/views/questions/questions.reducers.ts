import { createReducer, isAnyOf } from "@reduxjs/toolkit";
import {
  getQuestionByIdAction,
  getQuestionsListAction,
  voteQuestionChoiceAction,
} from "./questions.actions";
import { Question } from "./questions.types";

export interface QuestionsState {
  list: Question[];
  isNetworkRequestFailed: boolean;
}

const initialState: QuestionsState = {
  list: [],
  isNetworkRequestFailed: false,
};

export const questionsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getQuestionsListAction.fulfilled, (state, action) => {
    state.list = action.payload.questions;
  });

  builder.addCase(getQuestionByIdAction.fulfilled, (state, action) => {
    const questionIndex = state.list.findIndex(
      (question) => question.url === action.payload.question.url
    );

    if (questionIndex < 0) {
      state.list.push(action.payload.question);
    } else {
      state.list[questionIndex] = action.payload.question;
    }
  });

  builder.addCase(voteQuestionChoiceAction.fulfilled, (state, action) => {
    const questionIndex = state.list.findIndex(
      (question) => question.url === `/questions/${action.payload.questionId}`
    );

    if (questionIndex < 0) {
      return;
    }

    const choiceIndex = state.list[questionIndex].choices.findIndex(
      (choice) => choice.url === action.payload.choice.url
    );

    if (choiceIndex < 0) {
      return;
    }

    state.list[questionIndex].choices[choiceIndex] = action.payload.choice;
  });

  builder.addMatcher(
    isAnyOf(
      getQuestionsListAction.rejected,
      getQuestionByIdAction.rejected,
      voteQuestionChoiceAction.rejected
    ),
    (state, action) => {
      state.isNetworkRequestFailed = true;
    }
  );
});
