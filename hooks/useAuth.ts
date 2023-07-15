"use client";

import { AuthContext } from "@/context/AuthContext";
import { user } from "@/services/Api";
import { UserTokenProps } from "@/types/User";
import checkInterface from "@/utils/checkInterface";
import React from "react";

type setUserProps = React.Dispatch<
  React.SetStateAction<UserTokenProps | undefined>
>;

const useAuth = () => {
  function Auth(setUser: setUserProps) {
    const token = localStorage.getItem("user_token");

    if (token) {
      user()
        .get(token)
        .then((data) => {
          if (
            typeof data.data === "object" &&
            checkInterface<UserTokenProps>(data.data, "email", "id", "name")
          ) {
            setUser({ ...data.data, loading: true });
          }
        })
        .catch(() => {
          setUser((e) => {
            return e
              ? { ...e, loading: true }
              : { name: "", email: "", id: 0, loading: true };
          });
        });
    }
  }

  function Get(): UserTokenProps {
    const context = React.useContext(AuthContext);
    const void_user = { name: "", email: "", id: 0, loading: false };

    if (context.user) {
      return context.user;
    }

    return void_user;
  }

  return { Auth, Get };
};

export default useAuth;
