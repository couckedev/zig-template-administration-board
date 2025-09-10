import { getUsers } from "@/entities/user/api/user.api";
import type { User } from "@/entities/user/model/user.model";
import { useEffect, useState } from "react";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import type { DataTableContextContent } from "@/shared/ui/datatable/model/data-table-context-content.interface";
import { userTableColumns } from "@/entities/user/model/list-user.columns";
import { useListUsersContext } from "./use-list-users-context.hook";

export const useListUsersTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPageSize, setCurrentPageSize] = useState<number>(22);
  const pageSizes = [22, 32, 42, 520];
  const { setFilterPanelVisible, setError } = useListUsersContext();

  const table = useReactTable<User>({
    data: users,
    columns: userTableColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  const dataTableContextContent: DataTableContextContent<User> = {
    pagination: {
      currentPage,
      totalPages: totalPages ?? 1,
      pageSizes,
      currentPageSize,
      setCurrentPage,
      setCurrentPageSize,
    },
    filter: {
      setFilterPanelVisible,      
    },
    isLoading: loading,
    table,
  };

  useEffect(() => {
    setLoading(true);
    getUsers({ pageSize: currentPageSize, currentPage })
      .then((getUsersApiResponse) => {
        setUsers(getUsersApiResponse.users);
        setTotalPages(getUsersApiResponse.totalPages);
      })
      .catch((errorCatched: Error) => setError(errorCatched))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  }, [currentPage, currentPageSize, setError]);

  return {
    dataTableContextContent,
  };
};
