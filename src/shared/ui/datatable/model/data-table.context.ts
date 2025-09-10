import React from "react";
import type { DataTableContextContent } from "./data-table-context-content.interface";

export const DataTableContext = React.createContext<DataTableContextContent | undefined>(undefined);
