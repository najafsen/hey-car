import styled from "styled-components";
import { PropsWithChildren } from "../../types/global";

const CardHeader = styled.h6`
  color: #777777;
`;

const CardContent = styled.h6`
  color: #c2c2c2;
`;

interface CardProps extends PropsWithChildren {
  header: string;
}

export const Card = ({ header, children }: CardProps) => (
  <article>
    <CardHeader>{header}</CardHeader>
    <CardContent>{children}</CardContent>
  </article>
);
