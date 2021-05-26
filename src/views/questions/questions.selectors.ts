import { RootState } from "../../app.store";

export const selectQuestionsList = (state: RootState) => state.questions.list;
