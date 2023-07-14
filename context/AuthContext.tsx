"use client";

import useAuth from "@/hooks/useAuth";
import { AuthContextProps } from "@/types/Context";
import { UserTokenProps } from "@/types/User";
import React from "react";

export const AuthContext = React.createContext<AuthContextProps>({});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = React.useState<UserTokenProps>();
  const refUseAuth = React.useRef(useAuth);

  React.useEffect(() => {
    refUseAuth.current(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
