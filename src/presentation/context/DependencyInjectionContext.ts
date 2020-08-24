import { createContext } from "react";
import { DependencyContainer } from "tsyringe";

export const DependencyInjectionContext = createContext<DependencyContainer>(
  {} as DependencyContainer
);
