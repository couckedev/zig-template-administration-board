import { TableBody } from "@/shared/ui/table/table";
import { useTable } from "../../model/use-table.hook";

export function DataTableEmptyBody<DataType>() {
  const { table, emptyMessage } = useTable<DataType>();

  return (
    <TableBody className="max-h-[70vh] overflow-y-auto">
      <tr>
        <td colSpan={table.getLeftLeafColumns().length} className="text-center p-2">
          {emptyMessage ?? "No results found"}
        </td>
      </tr>
    </TableBody>
  );
}
