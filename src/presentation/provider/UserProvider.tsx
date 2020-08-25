import React from "react";
import { useSessionStorage } from "react-use";
import { UserContext } from "@/presentation/context/UserContext";
import { User } from "@/domain/models";

export const UserProvider: React.FunctionComponent = ({ children }) => {
  const [user] = useSessionStorage<User>("user");
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
