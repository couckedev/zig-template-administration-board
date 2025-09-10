import { DataTableMenuBar } from "./data-table-menu-bar";
import { DataTableRowCountSelect } from "./data-table-row-count-select";

export function DataTableTop<DataType>() {
  return (
    <div className="flex justify-between mr-2 my-3">
      <DataTableRowCountSelect<DataType> />
      <DataTableMenuBar<DataType> />
    </div>
  );
}
