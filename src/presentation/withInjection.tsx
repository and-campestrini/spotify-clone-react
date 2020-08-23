import React from "react";
import { DependencyInjectionContext, State } from "@/presentation/context";

type ResolutionConfig = {
  [prop: string]: string;
};

type Without<T, K> = {
  [L in Exclude<keyof T, K>]: T[L];
};

export function withInjection<T, K>(
  WrappedComponent: React.ComponentType<T>,
  resolutionConfig: ResolutionConfig
): React.ComponentType<Without<T, keyof K>> {
  return class InjectionWrapper extends React.Component<any, any> {
    static contextType = DependencyInjectionContext;
    static WrappedComponent = WrappedComponent;

    render() {
      const container = this.context as State;
      const diProps: any = {};

      Object.keys(resolutionConfig).forEach((prop) => {
        const definitionName = resolutionConfig[prop];
        diProps[prop] = container.resolve(definitionName);
      });

      const { ...restProps } = this.props;
      return <WrappedComponent {...diProps} {...(restProps as T)} />;
    }
  };
}
