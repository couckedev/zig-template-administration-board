import type { User } from "@/entities/user/model/user.model";
import { DataTable } from "@/shared/ui/datatable/data-table";
import type { DataTableContextContent } from "@/shared/ui/datatable/model/data-table-context-content.interface";
import { DataTableContext } from "@/shared/ui/datatable/model/data-table.context";
import { useListUsersTable } from "../../model/use-list-users-table.hook";

export function ListUserDataTable() {
  const { dataTableContextContent } = useListUsersTable();
  
  return (
    <DataTableContext.Provider
      value={dataTableContextContent as DataTableContextContent}
    >
      <DataTable<User> />
    </DataTableContext.Provider>
  );
}
