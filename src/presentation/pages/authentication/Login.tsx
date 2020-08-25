import React, { useEffect } from "react";
import { withInjection } from "@/presentation/withInjection";
import { AuthenticationProviderRedirect } from "@/domain/useCases";
import { useUser } from "@/presentation/hooks";

type Props = {
  authenticationProviderRedirect: AuthenticationProviderRedirect;
};

const DiConfig = {
  authenticationProviderRedirect: "AuthenticationProviderRedirect",
};

export const Login: React.FunctionComponent<Props> = ({
  authenticationProviderRedirect,
}) => {
  const currentUser = useUser();

  useEffect(() => {
    if (!currentUser) {
      authenticationProviderRedirect.redirect();
    }
  }, [currentUser]);

  return null;
};

export const LoginWithInjection = withInjection<Props, typeof DiConfig>(
  Login,
  DiConfig
);
