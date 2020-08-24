import { useContext } from "react";
import { UserContext } from "@/presentation/context/UserContext";
import { User } from "@/domain/models";

export function useUser(): User {
  return useContext(UserContext);
}
