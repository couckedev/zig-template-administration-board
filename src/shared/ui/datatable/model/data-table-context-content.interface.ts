import type { Table } from "@tanstack/react-table";
import type React from "react";
import type {  PaginationContent} from "./pagination-content.interface";
import type { FilterContent } from "./filter-content.interface";

export interface DataTableContextContent<DataType = unknown> {   
  table: Table<DataType>; 
  pagination: PaginationContent,
  filter?: FilterContent;
  loadingMessage?: string;
  emptyMessage?: string;
  isLoading?: boolean;
  isEmpty?: boolean;
  showXlsExportButton?: boolean;
  error?: Error
  setError?: React.Dispatch<React.SetStateAction<Error>>
}