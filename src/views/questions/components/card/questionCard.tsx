import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { Card } from "../../../../components/card/card";
import { questionsPageBasePath } from "../../questions.router";

const Line = styled.div`
  margin: 4px 0;
`;

const Link = styled(RouterLink)`
  text-decoration: none;
  padding: 4px;

  :hover {
    background-color: #fafafa;
  }
`;

interface QuestionCardProps {
  id: string;
  title: string;
  published: string;
  choicesCount: number;
}

export const QuestionCard = ({
  id,
  title,
  published,
  choicesCount,
}: QuestionCardProps) => (
  <Link to={`${questionsPageBasePath}/${id}`}>
    <Card header={title}>
      <Line>{published}</Line>
      <Line>
        Choices count: <strong>{choicesCount}</strong>
      </Line>
    </Card>
  </Link>
);
