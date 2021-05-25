import { FunctionComponent } from "react";
import styled from "styled-components";
import { Card } from "../../../../components/card/card";
import { PageContent } from "../../../../components/pageContent/pageContent";
import { PageHeader } from "../../../../components/pageHeader/pageHeader";
import { mdMinWidth } from "../../../../constants/styles";

const List = styled.div`
  display: grid;

  @media (min-width: ${mdMinWidth}) {
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
`;

export const QuestionsList: FunctionComponent<{}> = () => {
  return (
    <>
      <PageHeader>Questions</PageHeader>
      <PageContent>
        <List>
          <Card header="Sample card">Sample card description</Card>
          <Card header="Sample card">Sample card description</Card>
          <Card header="Sample card">Sample card description</Card>
          <Card header="Sample card">Sample card description</Card>
          <Card header="Sample card">Sample card description</Card>
          <Card header="Sample card">Sample card description</Card>
          <Card header="Sample card">Sample card description</Card>
          <Card header="Sample card">Sample card description</Card>
          <Card header="Sample card">Sample card description</Card>
          <Card header="Sample card">Sample card description</Card>
          <Card header="Sample card">Sample card description</Card>
          <Card header="Sample card">Sample card description</Card>
          <Card header="Sample card">Sample card description</Card>
          <Card header="Sample card">Sample card description</Card>
          <Card header="Sample card">Sample card description</Card>
          <Card header="Sample card">Sample card description</Card>
        </List>
      </PageContent>
    </>
  );
};
