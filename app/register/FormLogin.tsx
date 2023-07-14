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

const FormRegister = () => {
  const router = useRouter();
  const context = React.useContext(AuthContext);

  function onFormSend(
    event: React.FormEvent,
    inputs: FormInputValuesProps,
    setErros: setErrosProps
  ) {
    // pegando o email e a senha.
    const username = `${inputs[0]}`;
    const email = `${inputs[1]}`;
    const password = `${inputs[2]}`;

    // Realizando o registro
    // user()
    //   .login(email, password)
    //   .then((data) => {
    //     if (+data.status == 200 && data.token) {
    //       getUser(data.token);
    //     } else {
    //       setErros([data.data]);
    //     }
    //   })
    //   .catch((error: PromisseApiError) => {
    //     setErros([error.response.data.data]);
    //   });
  }

  return (
    <Form
      onSend={onFormSend}
      inputs={[
        {
          type: "text",
          placeholder: "",
          label: "NOME DE USUÁRIO",
          required: true,
          regexp: regexps.username,
          errormessage:
            "O nome de usuários dev ter no mínimo 6 letras, não pode conter espaços e nem caracteres especiais.",
        },
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
        text: "CRIAR CONTA",
      }}
    />
  );
};

export default FormRegister;
