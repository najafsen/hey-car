import { FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import { NetworkRequestFailed } from "../../../../components/networkRequestFailed/networkRequestFailed";
import { PageContent } from "../../../../components/pageContent/pageContent";
import { PageHeader } from "../../../../components/pageHeader/pageHeader";
import { mdMediaQuery } from "../../../../constants/styles";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { QuestionCard } from "../../components/card/questionCard";
import { getQuestionsListAction } from "../../questions.actions";
import {
  selectQuestionsIsNetworkRequestFailed,
  selectQuestionsList,
} from "../../questions.selectors";

const List = styled.div`
  display: grid;

  ${mdMediaQuery} {
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const getIdFromUrl = (url: string): string =>
  url.substring(url.lastIndexOf("/") + 1);

export const QuestionsList: FunctionComponent<{}> = () => {
  const questionsList = useAppSelector(selectQuestionsList);
  const isNetworkRequestFailed = useAppSelector(
    selectQuestionsIsNetworkRequestFailed
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getQuestionsListAction());
  }, [dispatch]);

  if (isNetworkRequestFailed) {
    return <NetworkRequestFailed />;
  }

  return (
    <>
      <PageHeader>Questions</PageHeader>
      <PageContent>
        <List>
          {questionsList.map((question) => (
            <QuestionCard
              key={question.url}
              id={getIdFromUrl(question.url)}
              title={question.question}
              published={question.published_at}
              choicesCount={question.choices.length}
            />
          ))}
        </List>
      </PageContent>
    </>
  );
};
