import { flexRender } from "@tanstack/react-table";
import { TableHeader, TableRow, TableHead } from "@/shared/ui/table/table";
import { useTable } from "../../model/use-table.hook";

export function DataTableHeader<DataType>() {
  const { table } = useTable<DataType>();
  
  return (
    <TableHeader>
      {table.getHeaderGroups().map(hg => (
        <TableRow key={hg.id}>
          {hg.headers.map(header => (
            <TableHead
              key={header.id}
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>
  );
}