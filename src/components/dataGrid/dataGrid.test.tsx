import { render } from "@testing-library/react";
import { DataGrid } from "./dataGrid";

interface TestDataGridInterface {
  name: string;
  id: string;
}

const items: TestDataGridInterface[] = [
  { name: "name1", id: "id1" },
  { name: "name2", id: "id2" },
  { name: "name3", id: "id3" },
  { name: "name4", id: "id4" },
  { name: "name5", id: "id5" },
  { name: "name6", id: "id6" },
];
describe("DataGrid", () => {
  it("should render correctly", () => {
    const { asFragment } = render(
      <DataGrid<TestDataGridInterface> columns={["name", "id"]} items={items} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should have 'name6id6' in 6th row", () => {
    const { getAllByRole } = render(
      <DataGrid<TestDataGridInterface> columns={["name", "id"]} items={items} />
    );

    expect(getAllByRole("row")[5].textContent).toBe("name6id6");
  });
});
