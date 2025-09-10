import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/shared/ui/sheet";
import { ListUserForm } from "./list-user-filters-form";
import { useListUsersFilter } from "../../model/use-list-users-filter.hook";

export function ListUserFilterPanel() {
  const { isFilterPanelVisible, onOpenChange } = useListUsersFilter();
  return (
    <div>
      <Sheet open={isFilterPanelVisible} onOpenChange={onOpenChange}>
        <SheetContent side="right" className="w-full sm:w-[420px]">
          <SheetHeader>
            <SheetTitle>Filters/search</SheetTitle>
          </SheetHeader>

          <div className="mt-4 space-y-4">
            <ListUserForm />
          </div>

          <SheetFooter className="mt-6 gap-2"></SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
