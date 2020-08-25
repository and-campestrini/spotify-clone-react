import React from "react";
import { DependencyInjectionContext } from "@/presentation/context";
import { DependencyContainer } from "tsyringe";
import { Routes } from "@/presentation/routes";

type Props = {
  dependencyContainer: DependencyContainer;
};

export const Main: React.FunctionComponent<Props> = ({
  dependencyContainer,
}) => {
  return (
    <DependencyInjectionContext.Provider value={dependencyContainer}>
      <Routes />
    </DependencyInjectionContext.Provider>
  );
};
