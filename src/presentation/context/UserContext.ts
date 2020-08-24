import { createContext } from "react";
import { User } from "@/domain/models";

export const UserContext = createContext<User>({} as User);
