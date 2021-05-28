import * as reduxHooks from "../../../../hooks/redux";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Question } from "../../questions.types";
import { extractIdsFromChoiceUrl, QuestionDetails } from "./questionDetails";
import * as questionActions from "../../questions.actions";
import { questionsFixture } from "../../__fixtures__/questions";

const match = { params: { id: "56" } };
const question: Question = questionsFixture[0];

const dispatch = jest.fn();

describe("QuestionDetails", () => {
  beforeEach(() => {
    jest.spyOn(reduxHooks, "useAppDispatch").mockImplementation(() => dispatch);
  });

  it("should render correctly", () => {
    jest.spyOn(reduxHooks, "useAppSelector").mockReturnValueOnce(question);
    jest.spyOn(reduxHooks, "useAppSelector").mockReturnValueOnce(false);
    const { asFragment } = render(
      <QuestionDetails match={match as any} {...({} as any)} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render network error", () => {
    jest.spyOn(reduxHooks, "useAppSelector").mockReturnValueOnce(null);
    jest.spyOn(reduxHooks, "useAppSelector").mockReturnValueOnce(true);
    const { getByText } = render(
      <QuestionDetails match={match as any} {...({} as any)} />
    );

    expect(
      getByText(
        "Polls app need to access internet in order to work. Check your network connection."
      )
    ).toBeInTheDocument();
  });

  it("should render null when there is no question", () => {
    jest.spyOn(reduxHooks, "useAppSelector").mockReturnValueOnce(null);
    jest.spyOn(reduxHooks, "useAppSelector").mockReturnValueOnce(false);
    const { container } = render(
      <QuestionDetails match={match as any} {...({} as any)} />
    );

    expect(container).toMatchInlineSnapshot(`<div />`);
  });

  it("should render header and content", () => {
    jest.spyOn(reduxHooks, "useAppSelector").mockReturnValueOnce(question);
    jest.spyOn(reduxHooks, "useAppSelector").mockReturnValueOnce(false);
    const { getByText, getAllByRole } = render(
      <QuestionDetails match={match as any} {...({} as any)} />
    );

    expect(getByText("Questions Detail")).toBeInTheDocument(); // top header
    expect(getByText("Question: Favourite language?")).toBeInTheDocument(); // sub header
    expect(getAllByRole("row")).toHaveLength(4);
  });

  it("should dispatch vote action", () => {
    jest.spyOn(reduxHooks, "useAppSelector").mockReturnValueOnce(question);
    jest.spyOn(reduxHooks, "useAppSelector").mockReturnValueOnce(false);
    jest.spyOn(reduxHooks, "useAppSelector").mockReturnValueOnce(question);
    jest.spyOn(reduxHooks, "useAppSelector").mockReturnValueOnce(false);

    jest
      .spyOn(questionActions, "voteQuestionChoiceAction")
      .mockImplementation((p) => JSON.stringify(p) as any);

    const { getAllByRole, getByText } = render(
      <QuestionDetails match={match as any} {...({} as any)} />
    );

    const secondRadio = getAllByRole("radio")[1];
    userEvent.click(secondRadio);

    const button = getByText("Submit your vote!");

    userEvent.click(button);

    expect(dispatch).toHaveBeenCalledWith(
      questionActions.voteQuestionChoiceAction(
        extractIdsFromChoiceUrl(question.choices[1].url)
      )
    );
  });

  describe("extractIdsFromChoiceUrl", () => {
    it("should return correct question and choice id", () => {
      expect(extractIdsFromChoiceUrl(question.choices[0].url)).toEqual({
        questionId: "12",
        choiceId: "81",
      });
    });
  });
});
