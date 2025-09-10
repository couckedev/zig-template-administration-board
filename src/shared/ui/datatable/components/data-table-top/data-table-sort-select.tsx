import type { ButtonProps } from "@/shared/ui/button/button-props.interface";
import { Combobox } from "@/shared/ui/combobox/combobox";

export function DataTableSortSelect() {
  const buttonProps: ButtonProps = {
    variant: "ghost",
    size: "small",
  };

  return (
    <div className="flex flex-inline">
      <Combobox
        entries={[]}
        placeholder="Sort by..."
        buttonProps={buttonProps}
        popoverSide="bottom"
        size="small"
      />
    </div>
  );
}
