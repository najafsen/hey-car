import {
  getQuestionByIdAction,
  getQuestionsListAction,
  voteQuestionChoiceAction,
} from "./questions.actions";
import { questionsReducer, initialState } from "./questions.reducer";
import { questionsFixture } from "./__fixtures__/questions";

describe("Questions reducer", () => {
  it("should set the list of questions", () => {
    const state = questionsReducer(initialState, {
      type: getQuestionsListAction.fulfilled.type,
      payload: {
        questions: questionsFixture,
      },
    });

    expect(state.list).toEqual(questionsFixture);
  });

  it("should add question to the list of questions", () => {
    const state = questionsReducer(initialState, {
      type: getQuestionByIdAction.fulfilled.type,
      payload: {
        question: questionsFixture[0],
      },
    });

    expect(state.list).toEqual([questionsFixture[0]]);
  });

  it("should replace question if exists in the list of questions", () => {
    const state = questionsReducer(initialState, {
      type: getQuestionsListAction.fulfilled.type,
      payload: {
        questions: questionsFixture,
      },
    });

    const newState = questionsReducer(state, {
      type: getQuestionByIdAction.fulfilled.type,
      payload: {
        question: { ...questionsFixture[0], question: "Fake question" },
      },
    });

    expect(newState.list[0].question).toBe("Fake question");
  });

  it("should increase number of votes for a choice", () => {
    const state = questionsReducer(initialState, {
      type: getQuestionsListAction.fulfilled.type,
      payload: {
        questions: questionsFixture,
      },
    });

    const newState = questionsReducer(state, {
      type: voteQuestionChoiceAction.fulfilled.type,
      payload: {
        choice: { ...questionsFixture[0].choices[0], votes: 123 },
        questionId: questionsFixture[0].url.match(/\d+/),
      },
    });

    expect(newState.list[0].choices[0].votes).toBe(123);
  });

  it("should set network request failed to true when voteQuestionChoiceAction fails", () => {
    const newState = questionsReducer(initialState, {
      type: voteQuestionChoiceAction.rejected.type,
    });

    expect(newState.isNetworkRequestFailed).toBe(true);
  });

  it("should set network request failed to true when getQuestionsListAction fails", () => {
    const newState = questionsReducer(initialState, {
      type: getQuestionsListAction.rejected.type,
    });

    expect(newState.isNetworkRequestFailed).toBe(true);
  });

  it("should set network request failed to true when getQuestionByIdAction fails", () => {
    const newState = questionsReducer(initialState, {
      type: getQuestionByIdAction.rejected.type,
    });

    expect(newState.isNetworkRequestFailed).toBe(true);
  });
});
