"use client";

import Form from "@/components/Form/Form";
import { AuthContext } from "@/context/AuthContext";
import { user } from "@/services/Api";
import regexps from "@/services/Regexps";
import { PromisseApiError } from "@/types/Api";
import { UserTokenProps } from "@/types/User";
import { FormInputValuesProps, setErrosProps } from "@/types/components/Form";
import checkInterface from "@/utils/checkInterface";
import { useRouter } from "next/navigation";
import React from "react";

const FormLogin = () => {
  const router = useRouter();
  const context = React.useContext(AuthContext);

  function onFormSend(
    event: React.FormEvent,
    inputs: FormInputValuesProps,
    setErros: setErrosProps
  ) {
    // pegando o email e a senha.
    const email = `${inputs[0]}`;
    const password = `${inputs[1]}`;

    // Realizando o login
    user()
      .login(email, password)
      .then((data) => {
        if (+data.status == 200 && data.token) {
          getUser(data.token);
        } else {
          setErros([data.data]);
        }
      })
      .catch((error: PromisseApiError) => {
        setErros([error.response.data.data]);
      });

    // Função que vai pegar o usuário
    function getUser(token: string) {
      user()
        .get(token)
        .then((data) => {
          if (
            context.setUser &&
            typeof data.data === "object" &&
            checkInterface<UserTokenProps>(data.data, "email", "id", "name")
          ) {
            context.setUser(data.data);
            localStorage.setItem("user_token", token);
            router.push("/");
          }
        })
        .catch((error: PromisseApiError) => {
          setErros([error.response.data.data]);
        });
    }
  }

  return (
    <Form
      onSend={onFormSend}
      inputs={[
        {
          type: "email",
          placeholder: "seuemail@gmail.com",
          label: "EMAIL",
          required: true,
          regexp: regexps.email,
          errormessage: "Email inválido.",
        },
        {
          type: "password",
          placeholder: "********",
          label: "PASSWORD",
          required: true,
          regexp: regexps.password,
          errormessage:
            "Senha inválida, é preciso ter no mínimo 1 número e 8 caracteres.",
        },
      ]}
      button={{
        text: "FAZER LOGIN",
      }}
    />
  );
};

export default FormLogin;
