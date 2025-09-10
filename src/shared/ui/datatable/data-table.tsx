import type { DataTableProps } from "./components/data-table-props.interface";
import { cn } from "@/shared/lib/utils";
import "./components/data-table.css";
import { useDataTableContext } from "./model/use-data-table-context.hook";
import { LoadingOverlay } from "@/shared/ui/overlay/overlay";
import { DataTableTable } from "./components/data-table-table/data-table-table";
import { DataTableBottom } from "./components/data-table-bottom/data-table-bottom";
import { DataTableTop } from "./components/data-table-top/data-table-top";
import { Loader2 } from "lucide-react";

export function DataTable<DataType>({ className }: DataTableProps) {
  const { isLoading, error } = useDataTableContext<DataType>();

  return (
    <div className={cn("w-full relative", className)}>
      {isLoading && (
        <LoadingOverlay>
          <Loader2 className="animate-spin" />
        </LoadingOverlay>
      )}

      {error && (
        <LoadingOverlay>
            <div>Error</div>
        </LoadingOverlay>
      )}
      <DataTableTop<DataType> />

      {/* TABLE BODY SCROLLABLE */}
      <div className="data-table--table-wrapper w-full overflow-y-auto">
        <DataTableTable<DataType> />
      </div>
      <DataTableBottom<DataType> />
    </div>
  );
}
