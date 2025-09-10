import type { User } from "../model/user.model";

export function UserAvatarCell({ user }: { user: User }) {
  return (
    <img
      src={user.image}
      alt="avatar"
      className="w-8 h-8 rounded-full object-cover"
    />
  );
}