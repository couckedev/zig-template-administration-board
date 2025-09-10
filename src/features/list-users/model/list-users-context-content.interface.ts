import type React from "react";

export interface ListUsersContextContent {
    error?: Error,
    setError: React.Dispatch<React.SetStateAction<Error | undefined>>,
    isFilterPanelVisible: boolean,
    setFilterPanelVisible: React.Dispatch<React.SetStateAction<boolean>>,
}