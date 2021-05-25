import styled from "styled-components";
import { mdMediaQuery } from "../constants/styles";

const mainBackground = "#F7F7F7";
const contentBackground = "#FFFFFF";

const Main = styled.main`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: ${mainBackground};
`;

const MainContent = styled.div`
  width: 100%;
  padding: 8px 16px;
  background-color: ${contentBackground};

  ${mdMediaQuery} {
    width: 768px;
  }
`;

export const Layout = ({ children }: any) => (
  <Main>
    <MainContent>{children}</MainContent>
  </Main>
);
