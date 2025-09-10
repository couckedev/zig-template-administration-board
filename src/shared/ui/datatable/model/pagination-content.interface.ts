export interface PaginationContent {    
  totalPages: number;
  currentPage: number;
  currentPageSize?: number;
  pageSizes?: number[];
  setCurrentPageSize?: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
  isRowCountSelectVisible?: boolean;
  isPageCountSelectVisible?: boolean;
}