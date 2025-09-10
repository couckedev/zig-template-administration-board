import React from "react";
import type { ListUsersContextContent } from "./list-users-context-content.interface";

export const ListUsersContext = React.createContext<ListUsersContextContent | undefined>(undefined);
