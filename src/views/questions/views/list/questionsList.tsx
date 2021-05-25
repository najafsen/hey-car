import { FunctionComponent } from "react";
import styled from "styled-components";
import { PageContent } from "../../../../components/pageContent/pageContent";
import { PageHeader } from "../../../../components/pageHeader/pageHeader";
import { mdMinWidth } from "../../../../constants/styles";
import { QuestionCard } from "../../components/card/questionCard";

const List = styled.div`
  display: grid;

  @media (min-width: ${mdMinWidth}) {
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const QuestionsList: FunctionComponent<{}> = () => {
  return (
    <>
      <PageHeader>Questions</PageHeader>
      <PageContent>
        <List>
          <QuestionCard
            id="5"
            title="Sample question"
            published="23-12-2020 12:45"
            choicesCount={5}
          />
          <QuestionCard
            id="5"
            title="Sample question"
            published="23-12-2020 12:45"
            choicesCount={5}
          />
          <QuestionCard
            id="5"
            title="Sample question"
            published="23-12-2020 12:45"
            choicesCount={5}
          />
          <QuestionCard
            id="5"
            title="Sample question"
            published="23-12-2020 12:45"
            choicesCount={5}
          />
          <QuestionCard
            id="5"
            title="Sample question"
            published="23-12-2020 12:45"
            choicesCount={5}
          />
          <QuestionCard
            id="5"
            title="Sample question"
            published="23-12-2020 12:45"
            choicesCount={5}
          />
          <QuestionCard
            id="5"
            title="Sample question"
            published="23-12-2020 12:45"
            choicesCount={5}
          />
          <QuestionCard
            id="5"
            title="Sample question"
            published="23-12-2020 12:45"
            choicesCount={5}
          />
          <QuestionCard
            id="5"
            title="Sample question"
            published="23-12-2020 12:45"
            choicesCount={5}
          />
          <QuestionCard
            id="5"
            title="Sample question"
            published="23-12-2020 12:45"
            choicesCount={5}
          />
          <QuestionCard
            id="5"
            title="Sample question"
            published="23-12-2020 12:45"
            choicesCount={5}
          />
          <QuestionCard
            id="5"
            title="Sample question"
            published="23-12-2020 12:45"
            choicesCount={5}
          />
          <QuestionCard
            id="5"
            title="Sample question"
            published="23-12-2020 12:45"
            choicesCount={5}
          />
          <QuestionCard
            id="5"
            title="Sample question"
            published="23-12-2020 12:45"
            choicesCount={5}
          />
          <QuestionCard
            id="5"
            title="Sample question"
            published="23-12-2020 12:45"
            choicesCount={5}
          />
          <QuestionCard
            id="5"
            title="Sample question"
            published="23-12-2020 12:45"
            choicesCount={5}
          />
        </List>
      </PageContent>
    </>
  );
};
