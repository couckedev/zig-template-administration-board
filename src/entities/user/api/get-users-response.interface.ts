import type { User } from "../model/user.model";

export interface GetUsersResponse {
    users: User[];
    totalPages: number;
    totalRows: number;
}