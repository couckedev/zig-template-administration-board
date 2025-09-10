import { useTable } from "../../model/use-table.hook";

export function DataTableResultCount<DataType>() {
  const { totalRows } = useTable<DataType>();
  return <>{totalRows && <span>Total : {totalRows}</span>}</>;
}
