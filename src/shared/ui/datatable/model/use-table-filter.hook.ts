import { useDataTableContext } from "./use-data-table-context.hook";

export function useTableFilter<DataType>() {
  const dataTableContextContent = useDataTableContext<DataType>();
  if(!dataTableContextContent.filter) {
    return {};
  }
  const { setFilterPanelVisible, showFilterButton } = dataTableContextContent.filter;
  const onFilterButtonClicked = () => {
    if(!setFilterPanelVisible) {
        return;
    }
    setFilterPanelVisible(true);
  }


  return { onFilterButtonClicked, showFilterButton }
}