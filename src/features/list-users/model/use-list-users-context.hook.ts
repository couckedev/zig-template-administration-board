import { useContext } from "react";
import { ListUsersContext } from "./list-users.context";
import type { ListUsersContextContent } from "./list-users-context-content.interface";

export function useListUsersContext() {
    const listUsersContext = useContext(ListUsersContext);
      if (!listUsersContext) {
        throw new Error("useListUsersContext must be used within a ListUsersContext.Provider");
      }
      return listUsersContext as ListUsersContextContent;
}