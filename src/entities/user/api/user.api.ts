import type { User } from "../model/user.model";
import type { GetUsersParameters } from "./get-users-parameters.interface";
import type { GetUsersResponse } from "./get-users-response.interface";
import { InvalidPageNumber } from "./invalid-page-number.error";
import { InvalidPageSize } from "./invalid-page-size.error";

export const getUsers = async ({
  pageSize,
  currentPage = 1,
}: GetUsersParameters): Promise<GetUsersResponse> => {
  if(pageSize < 1) {
    throw new InvalidPageSize();
  }
  if(currentPage < 1) {
    throw new InvalidPageNumber();
  }
  const limit = pageSize;
  const skip = (currentPage - 1) * pageSize;

  // On récupère les users avec tous les champs utiles
  const res = await fetch(
    `https://dummyjson.com/users?limit=${limit}&skip=${skip}&select=id,firstName,lastName,maidenName,age,gender,email,phone,birthDate,image`
  );
  const data = await res.json();

  // Typage fort : data.users est User[] (adapté à notre modèle)
  const users: User[] = data.users;

  // Pagination
  const totalPages = Math.ceil(data.total / pageSize);

  return { users, totalPages, totalRows: data.total ?? undefined };
};