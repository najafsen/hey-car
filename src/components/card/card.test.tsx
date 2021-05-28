import { render } from "@testing-library/react";
import { Card } from "./card";

describe("Card", () => {
  it("should render correctly", () => {
    const { asFragment } = render(<Card header="test">Content</Card>);
    expect(asFragment()).toMatchSnapshot();
  });
});
