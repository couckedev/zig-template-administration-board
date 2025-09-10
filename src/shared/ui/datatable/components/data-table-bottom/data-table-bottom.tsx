import { DataTablePaginationBar } from "./data-table-pagination-bar";
import { DataTableResultCount } from "./data-table-result-count";

export function DataTableBottom<DataType>() {
  return (
    <div className="flex flex-col mx-2 my-3">
      <DataTableResultCount<DataType> />
      <DataTablePaginationBar<DataType> />
    </div>
  );
}
