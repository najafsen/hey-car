import { createAsyncThunk } from "@reduxjs/toolkit";
import { getQuestionsList } from "./questions.api";

export const prefix = "questions";

export const getQuestionsListAction = createAsyncThunk(
  `${prefix}/getList`,
  async () => {
    const questions = await getQuestionsList();
    return { questions };
  }
);
