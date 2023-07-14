"use client";

import { AuthContext } from "@/context/AuthContext";
import { user } from "@/services/Api";
import { UserTokenProps } from "@/types/User";
import checkInterface from "@/utils/checkInterface";
import React from "react";

type setUserProps = React.Dispatch<
  React.SetStateAction<UserTokenProps | undefined>
>;

const useAuth = (setUser: setUserProps) => {
  const token = localStorage.getItem("user_token");

  if (token) {
    user()
      .get(token)
      .then((data) => {
        if (
          typeof data.data === "object" &&
          checkInterface<UserTokenProps>(data.data, "email", "id", "name")
        ) {
          setUser(data.data);
        }
      });
  }
};

export default useAuth;
