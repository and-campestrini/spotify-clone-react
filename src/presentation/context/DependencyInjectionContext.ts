import { createContext } from "react";
import { DependencyContainer } from "tsyringe";

export type State = DependencyContainer;

export const DependencyInjectionContext = createContext<State>({} as State);
