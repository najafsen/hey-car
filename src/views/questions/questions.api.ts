import { axiosInstance } from "../../utils/axios";
import { Question, QuestionChoice } from "./questions.types";

export const baseUrl = "/questions";

export const getQuestionsList = async (): Promise<Question[]> => {
  const { data } = await axiosInstance.get(baseUrl);
  return data;
};

export const getQuestionById = async (
  questionId: string
): Promise<Question> => {
  const { data } = await axiosInstance.get(`${baseUrl}/${questionId}`);
  return data;
};

export const voteQuestionChoice = async (
  questionId: string,
  choiceId: string
): Promise<QuestionChoice> => {
  const { data } = await axiosInstance.post(
    `${baseUrl}/${questionId}/choices/${choiceId}`
  );
  return data;
};
