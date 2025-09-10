import type { User } from "../model/user.model";
export function UserGenderCell({ user }: { user: User }) {
  return (
    <span>
      {user.gender === "male" ? "👨" : user.gender === "female" ? "👩" : "❓"}
    </span>
  );
}