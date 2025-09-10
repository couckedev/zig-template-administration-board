import type { User } from "../model/user.model";
export function UserAgeCell({ user }: { user: User }) {
  return <span className="text-xs">{user.age}</span>;
}