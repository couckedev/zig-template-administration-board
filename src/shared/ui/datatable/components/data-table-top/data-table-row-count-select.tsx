import type { ButtonProps } from "@/shared/ui/button/button-props.interface";
import { Combobox } from "@/shared/ui/combobox/combobox";
import type { ComboboxEntry } from "@/shared/ui/combobox/combobox-entry.interface";
import { useTablePagination } from "../../model/use-table-pagination.hook";

export function DataTableRowCountSelect<DataType>() {
  const { onRowCountSelectChanged, pageSizes, currentPageSize } = useTablePagination<DataType>();
  const buttonProps: ButtonProps = {
    variant: "ghost",
    size: "small",
  };

  const sizes: ComboboxEntry[] = [];
  for (const pageSize of pageSizes) {
    sizes.push({ label: pageSize.toString(), value: pageSize.toString() });
  }
  return (
    <div>
      <label className="mx-2 self-center">Elements</label>
      <Combobox
        buttonProps={buttonProps}
        entries={sizes}
        popoverSide="bottom"
        value={currentPageSize}
        size="small"
        onChange={onRowCountSelectChanged}
      />
    </div>
  );
}
