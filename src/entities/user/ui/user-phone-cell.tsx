import type { User } from "../model/user.model";
export function UserPhoneCell({ user }: { user: User }) {
  return <span className="text-xs">{user.phone}</span>;
}