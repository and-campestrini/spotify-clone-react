import React, { useEffect } from "react";
import { withInjection } from "@/presentation/withInjection";
import { AuthenticationProviderRedirect } from "@/domain/useCases";

type Props = {
  authenticationProviderRedirect: AuthenticationProviderRedirect;
};

const DiConfig = {
  authenticationProviderRedirect: "AuthenticationProviderRedirect",
};

const Login: React.FunctionComponent<Props> = ({
  authenticationProviderRedirect,
}) => {
  useEffect(() => {
    window.location.assign(authenticationProviderRedirect.getRedirectUrl());
  });
  return null;
};

export default withInjection<Props, typeof DiConfig>(Login, DiConfig);
