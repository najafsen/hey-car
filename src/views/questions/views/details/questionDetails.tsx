import { ReactChild, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { DataGrid } from "../../../../components/dataGrid/dataGrid";
import { NetworkRequestFailed } from "../../../../components/networkRequestFailed/networkRequestFailed";
import { PageActions } from "../../../../components/pageActions/pageActions";
import { PageContent } from "../../../../components/pageContent/pageContent";
import { PageHeader } from "../../../../components/pageHeader/pageHeader";
import { ProgressBar } from "../../../../components/progressBar/progressBar";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import {
  getQuestionByIdAction,
  voteQuestionChoiceAction,
} from "../../questions.actions";
import {
  selectQuestionById,
  selectQuestionsIsNetworkRequestFailed,
} from "../../questions.selectors";
import { QuestionChoice } from "../../questions.types";

const extractIdsFromChoiceUrl = (
  url: string | null
): { questionId: string; choiceId: string } => {
  const slashIds = url?.match(/\/\d+/g);

  return {
    questionId: slashIds?.[0]?.substring(1) ?? "",
    choiceId: slashIds?.[1]?.substring(1) ?? "",
  };
};

interface ChoiceDataGridItem extends QuestionChoice {
  percentage: ReactChild;
  select: ReactChild;
}

export interface QuestionDetailsProps
  extends RouteComponentProps<{ id: string }> {}

export const QuestionDetails = ({ match }: QuestionDetailsProps) => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const question = useAppSelector((state) =>
    selectQuestionById(state, match.params.id)
  );
  const isNetworkRequestFailed = useAppSelector(
    selectQuestionsIsNetworkRequestFailed
  );

  useEffect(() => {
    if (!question) {
      dispatch(getQuestionByIdAction(match.params.id));
    }
  }, [dispatch, match.params.id, question]);

  if (isNetworkRequestFailed) {
    return <NetworkRequestFailed />;
  }

  if (!question /** Or if loading */) {
    // TODO: handle no item found and/or loading state
    return null;
  }

  const totalVotes = question.choices.reduce(
    (sum, choice) => (sum += choice.votes),
    0
  );

  return (
    <>
      <PageHeader>Questions Detail</PageHeader>
      <PageContent>
        {/*  TODO Create a typography for H2 */}
        <h2>Question: {question.question}</h2>
        {/** This is not the best way of using a Grid, but considering time I had to do it this way */}
        <DataGrid<ChoiceDataGridItem>
          columns={["choice", "votes", "percentage", "select"]}
          items={question.choices.map<ChoiceDataGridItem>((choice) => ({
            ...choice,
            percentage: (
              <ProgressBar value={(choice.votes / (totalVotes || 1)) * 100} />
            ),
            select: (
              <label>
                <input
                  type="radio"
                  checked={selectedChoice === choice.url}
                  onClick={() => setSelectedChoice(choice.url)}
                />
                Vote
              </label>
            ),
          }))}
        />
      </PageContent>

      <PageActions>
        <button
          onClick={() =>
            dispatch(
              voteQuestionChoiceAction(extractIdsFromChoiceUrl(selectedChoice))
            )
          }
        >
          Submit your vote!
        </button>
      </PageActions>
    </>
  );
};
