import { Combobox } from "@/shared/ui/combobox/combobox";
import type { ButtonProps } from "@/shared/ui/button/button-props.interface";
import { INITIAL_PAGE } from "../../config/data-table.constants";
import type { ComboboxEntry } from "@/shared/ui/combobox/combobox-entry.interface";
import { useTablePagination } from "../../model/use-table-pagination.hook";

export function DataTablePageSelect<DataType>() {
  const { onPageSelected, totalPages, currentPage } = useTablePagination<DataType>();

  const pages: ComboboxEntry[] = [];
  for (let page = 1; page <= totalPages; page++) {
    pages.push({ label: page.toString(), value: page.toString() });
  }

  const buttonProps: ButtonProps = {
    variant: "ghost",
    size: "small",
  };

  return (
    <div className="flex flex-inline">
      <label className="mr-2  self-center">Page</label>
      <Combobox
        buttonProps={buttonProps}
        entries={pages}
        placeholder="Page"
        popoverSide="top"
        size="small"
        value={currentPage.toString() ?? INITIAL_PAGE}
        onChange={onPageSelected}
      />
    </div>
  );
}
