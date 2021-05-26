import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getQuestionById,
  getQuestionsList,
  voteQuestionChoice,
} from "./questions.api";
import { Question, QuestionChoice } from "./questions.types";

export const prefix = "questions";

export const getQuestionsListAction = createAsyncThunk<{
  questions: Question[];
}>(`${prefix}/getList`, async () => {
  const questions = await getQuestionsList();
  return { questions };
});

export const getQuestionByIdAction = createAsyncThunk<
  {
    question: Question;
  },
  string
>(`${prefix}/getById`, async (questionId: string) => {
  const question = await getQuestionById(questionId);
  return { question };
});

export const voteQuestionChoiceAction = createAsyncThunk<
  {
    choice: QuestionChoice;
    questionId: string;
  },
  { questionId: string; choiceId: string }
>(`${prefix}/voteChoice`, async ({ questionId, choiceId }) => {
  const choice = await voteQuestionChoice(questionId, choiceId);
  return { choice, questionId };
});
