import type { User } from "../model/user.model";
export function UserEmailCell({ user }: { user: User }) {
  return (
    <a href={`mailto:${user.email}`} className="underline text-blue-600 text-xs">
      {user.email}
    </a>
  );
}