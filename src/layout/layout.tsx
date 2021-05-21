import styled from "styled-components";

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
  background-color: ${contentBackground};

  @media (min-width: 768px) {
    width: 768px;
    padding: 8px 16px;
  }
`;

export const Layout = ({ children }: any) => (
  <Main>
    <MainContent>{children}</MainContent>
  </Main>
);
