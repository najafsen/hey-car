import styled from "styled-components";
import { mdMediaQuery } from "../../constants/styles";

export const color = `#acacac`;
export const borderColor = `#e4e4e4`;
export const highlightColor = `#f5f5f5`;

const Table = styled.div.attrs({
  role: "table",
})`
  border: 1px solid #e4e4e4;
`;

interface RowProps {
  columnCount: number;
}

const Row = styled.div.attrs({
  role: "row",
})`
  display: grid;
  grid-auto-flow: row;

  :nth-child(2n) {
    background-color: ${highlightColor};
  }

  :not(:last-child) {
    border-bottom: 1px solid ${borderColor};
  }

  ${mdMediaQuery} {
    grid-auto-flow: column;
    grid-template-columns: ${(p: RowProps) =>
      `repeat(${p.columnCount}, ${100 / p.columnCount}%)`};
  }
`;

const Cell = styled.div.attrs({
  role: "cell",
})`
  color: ${color};
  padding: 12px;

  :not(:last-child) {
    border-bottom: 1px dotted ${borderColor};
  }

  ${mdMediaQuery} {
    :not(:last-child) {
      border-bottom: none;
    }
  }
`;

interface DataGridProps<TItem> {
  columns: (keyof TItem)[];
  items: TItem[];
}

/**
 * Very basic data grid!
 */
export const DataGrid = <TItem extends unknown>({
  columns,
  items,
}: DataGridProps<TItem>) => (
  <Table>
    {items.map((item, index) => (
      <Row key={index} columnCount={columns.length}>
        {columns.map((column) => (
          <Cell key={column.toString()}>{item[column] as any}</Cell>
        ))}
      </Row>
    ))}
  </Table>
);
