import { useContext } from "react";
import type { DataTableContextContent } from "./data-table-context-content.interface";
import { DataTableContext } from "./data-table.context";

export function useDataTableContext<T = unknown>() {
  const ctx = useContext(DataTableContext);
  if (!ctx) {
    throw new Error("useDataTableContext must be used within a DataTableContext.Provider");
  }
  return ctx as DataTableContextContent<T>;
}