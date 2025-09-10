import type { User } from "../model/user.model";
export function UserIdCell({ user }: { user: User }) {
  return <span className="font-mono text-xs">{user.id}</span>;
}