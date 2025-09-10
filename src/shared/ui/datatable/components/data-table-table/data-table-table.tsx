import { Table } from "@/shared/ui/table/table";
import { DataTableHeader } from "./data-table-header";
import { DataTableEmptyBody } from "./data-table-empty-body";
import { DataTableBody } from "./data-table-body";
import { useTable } from "../../model/use-table.hook";

export function DataTableTable<DataType>() {
  const { isEmpty } = useTable<DataType>();

  return (
    <Table className="w-full data-table--table my-1">
      <DataTableHeader<DataType> />
      {isEmpty && <DataTableEmptyBody<DataType> />}
      {!isEmpty && <DataTableBody<DataType> />}
    </Table>
  );
}
