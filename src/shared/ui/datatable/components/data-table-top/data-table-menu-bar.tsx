import { Button } from "@/shared/ui/button/button";
import { FileDown, SlidersHorizontal } from "lucide-react";
import { useTableFilter } from "../../model/use-table-filter.hook";
import { DataTableSortSelect } from "./data-table-sort-select";

export function DataTableMenuBar<DataType>() {
  const { onFilterButtonClicked } = useTableFilter<DataType>();
  return (
    <div className="flex flex-inline gap-2">
      <DataTableSortSelect />
      <Button
        variant="ghost"
        size="small"
        onClick={onFilterButtonClicked}
      >
        <SlidersHorizontal /> <span className="hidden sm:block">Filters</span>
      </Button>

      <Button variant="ghost" size="small">
        <FileDown /> <span className="hidden sm:block">Export to xls</span>
      </Button>
    </div>
  );
}
