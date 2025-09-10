import { ListUserFilterPanel } from "./filter-panel/list-user-filter-panel";
import { ListUserDataTable } from "./data-table/list-user-data-table";
import { useState } from "react";
import type { ListUsersContextContent } from "../model/list-users-context-content.interface";
import { ListUsersContext } from "../model/list-users.context";

export function ListUsersFeature() {
  const [isFilterPanelVisible, setFilterPanelVisible] = useState(false);
  const [error, setError] = useState<Error | undefined>();

  const listUsersContextContent: ListUsersContextContent = {
    isFilterPanelVisible,
    setFilterPanelVisible,
    setError,
  };

  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">Utilisateurs</h2>
      {!error && (
        <ListUsersContext.Provider value={listUsersContextContent}>
          <ListUserDataTable />
          <ListUserFilterPanel />
        </ListUsersContext.Provider>
      )}
    </section>
  );
}
