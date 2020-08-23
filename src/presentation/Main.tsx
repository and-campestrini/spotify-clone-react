import React from "react";
import { DependencyInjectionContext } from "@/presentation/context";
import { DependencyContainer } from "tsyringe";
import { TestWithInjection } from "@/presentation/Test";

type Props = {
  dependencyContainer: DependencyContainer;
};

export const Main: React.FunctionComponent<Props> = ({
  dependencyContainer,
}) => {
  return (
    <DependencyInjectionContext.Provider value={dependencyContainer}>
      <TestWithInjection />
    </DependencyInjectionContext.Provider>
  );
};
