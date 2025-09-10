import { DEFAULT_PAGE_SIZE, DEFAULT_PAGE_SIZES, INITIAL_PAGE } from "../config/data-table.constants";
import { useDataTableContext } from "./use-data-table-context.hook";

export function useTablePagination<DataType>() {
  const dataTableContextContent = useDataTableContext<DataType>();
  const { setCurrentPage, setCurrentPageSize, currentPage, totalPages, currentPageSize, pageSizes } = dataTableContextContent.pagination;
  
  const setNextPage = () => {
    if (!setCurrentPage) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  const setPreviousPage = () => {
    if (!setCurrentPage) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  const setFirstPage = () => {
    if (!setCurrentPage) {
      return;
    }
    setCurrentPage(1);
  };

  const setLastPage = () => {
    if (!setCurrentPage) {
      return;
    }
    setCurrentPage(totalPages);
  };

  const isFirstPage = () => {
    return currentPage === 1;
  };

  const isLastPage = () => {
    return currentPage === totalPages;
  };

  const onPageSelected = (pageNumber: string) => {
    if (!setCurrentPage) {
      return;
    }
    setCurrentPage(parseInt(pageNumber));
  };

  
  const onRowCountSelectChanged = (pageSize: string) => {
    if(setCurrentPageSize === undefined) {
        return;
    }
    setCurrentPageSize(parseInt(pageSize));
    if(setCurrentPage === undefined) {
        return;
    }
    setCurrentPage(INITIAL_PAGE);
  }
  
  return {
    setNextPage,
    setPreviousPage,
    setFirstPage,
    setLastPage,
    isFirstPage,
    isLastPage,
    onPageSelected,
    onRowCountSelectChanged,
    currentPageSize: currentPageSize?.toString() ?? DEFAULT_PAGE_SIZE.toString(),
    pageSizes: pageSizes ?? DEFAULT_PAGE_SIZES,
    totalPages,
    currentPage,
  };
}
