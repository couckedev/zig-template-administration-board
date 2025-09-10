import { Button } from "@/shared/ui/button/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { DataTablePageSelect } from "./data-table-page-select";
import { useTablePagination } from "../../model/use-table-pagination.hook";

export function DataTablePaginationBar<DataType>() {
  const { setPreviousPage, setNextPage, setFirstPage, setLastPage, isFirstPage, isLastPage } = useTablePagination<DataType>();

  return (
    <div className="flex flex-inline flex-wrap justify-between mt-2">
      <div>
        <Button variant="ghost" size="small" className="!rounded-r-none mr-0" onClick={() => setFirstPage()} disabled={isFirstPage()}>
          <ChevronsLeft width={12} />
        </Button>

        <Button variant="ghost" size="small" className="!rounded-none mr-0" onClick={() => setPreviousPage()} disabled={isFirstPage()}>
          <ChevronLeft width={12} />
        </Button>
        <Button variant="ghost" size="small" className="!rounded-none mr-0" onClick={() => setNextPage()} disabled={isLastPage()}>
          <ChevronRight width={12} />
        </Button>

        <Button variant="ghost" size="small" className="!rounded-l-none mr-0" onClick={() => setLastPage()} disabled={isLastPage()}>
          <ChevronsRight width={12} />
        </Button>
      </div>
      <DataTablePageSelect />
    </div>
  );
}
