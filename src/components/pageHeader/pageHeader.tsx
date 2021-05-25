import styled from "styled-components";
import { PropsWithChildren } from "../../types/global";

const H1 = styled.h1`
  color: #c2c2c2;
`;

interface PageHeaderProps extends PropsWithChildren {}

export const PageHeader = ({ children }: PageHeaderProps) => (
  <header>
    <H1>{children}</H1>
  </header>
);
