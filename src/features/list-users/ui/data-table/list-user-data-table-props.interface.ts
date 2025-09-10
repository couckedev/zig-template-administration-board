import type { User } from "@/entities/user/model/user.model";
import type { DataTableContextContent } from "@/shared/ui/datatable/model/data-table-context-content.interface";

export interface ListUserDataTableProps {
    partialDataTableContextContent: Omit<DataTableContextContent<User>, 'table'>
}