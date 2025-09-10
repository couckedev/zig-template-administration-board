import { flexRender } from "@tanstack/react-table";
import { TableBody, TableRow, TableCell } from "@/shared/ui/table/table";
import type { JSX } from "react";
import { useTable } from "../../model/use-table.hook";

export function DataTableBody<DataType>() {
  const { rows } = useTable<DataType>();
  const bodyContent: JSX.Element[] = rows.map((row) => (
    <TableRow key={row.id}>
      {row.getVisibleCells().map((cell) => (
        <TableCell
          key={cell.id}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  ));
  
  return (
    <TableBody className="">
      {bodyContent}
    </TableBody>
  );
}
