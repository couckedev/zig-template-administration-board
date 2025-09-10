import { useDataTableContext } from "./use-data-table-context.hook";

export function useTable<DataType>() {
  const { table } = useDataTableContext<DataType>(); 

  const rows = table.getRowModel().rows;
  const totalRows = rows.length;
  const isEmpty = totalRows === 0;

  return { table, rows, totalRows, isEmpty }
}
