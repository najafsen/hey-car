import styled from "styled-components";

interface ProgressBarProps {
  value: number;
}

const OuterDiv = styled.div.attrs({
  role: "progressbar",
})`
  width: 100%;
  height: 24px;
  background-color: #dddddd;
`;

interface InnerDivProps {
  width: number;
}

const InnerDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: #bbbbbb;
  height: 100%;
  width: ${(p: InnerDivProps) => p.width}%;
  overflow: visible;
  white-space: nowrap;
  color: #777;
`;

export const ProgressBar = ({ value }: ProgressBarProps) => (
  <OuterDiv>
    <InnerDiv width={value}>{value.toFixed(2)} %</InnerDiv>
  </OuterDiv>
);
