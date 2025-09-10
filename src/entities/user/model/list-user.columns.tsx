import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "../model/user.model";
import { UserIdCell } from "../ui/user-id-cell";
import { UserNameCell } from "../ui/user-name-cell";
import { UserAgeCell } from "../ui/user-age-cell";
import { UserGenderCell } from "../ui/user-gender-cell";
import { UserEmailCell } from "../ui/user-email-cell";
import { UserPhoneCell } from "../ui/user-phone-cell";
import { UserAvatarCell } from "../ui/user-avatar-cell";

export const userTableColumns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <UserIdCell user={row.original} />,
  },
  {
    id: "name",
    header: "Nom complet",
    cell: ({ row }) => <UserNameCell user={row.original} />,
  },
  {
    accessorKey: "age",
    header: "Âge",
    cell: ({ row }) => <UserAgeCell user={row.original} />,
  },
  {
    accessorKey: "gender",
    header: "Genre",
    cell: ({ row }) => <UserGenderCell user={row.original} />,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <UserEmailCell user={row.original} />,
  },
  {
    accessorKey: "phone",
    header: "Téléphone",
    cell: ({ row }) => <UserPhoneCell user={row.original} />,
  },
  {
    accessorKey: "image",
    header: "Avatar",
    cell: ({ row }) => <UserAvatarCell user={row.original} />,
    enableSorting: false,
  },
];