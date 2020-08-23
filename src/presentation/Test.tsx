import React from "react";
import { DefaultAppConfig } from "@/infrastructure/config/DefaultAppConfig";
import { withInjection } from "@/presentation/withInjection";

type Props = {
  config: DefaultAppConfig;
};

const DiConfig = {
  config: "DefaultAppConfig",
};

const Test: React.FunctionComponent<Props> = ({ config }) => {
  return <p>{config.getSpotifyClientId()}</p>;
};

export const TestWithInjection = withInjection<Props, typeof DiConfig>(
  Test,
  DiConfig
);
