import type { User } from "../model/user.model";
export function UserNameCell({ user }: { user: User }) {
  return (
    <>
      <span>{user.firstName}</span> <span>{user.lastName}</span>
    </>
  );
}