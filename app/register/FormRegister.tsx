"use client";

import Form from "@/components/Form/Form";
import { user } from "@/services/Api";
import regexps from "@/services/Regexps";
import { PromisseApiError } from "@/types/Api";
import { FormInputValuesProps, setErrosProps } from "@/types/components/Form";
import { useRouter } from "next/navigation";
import React from "react";

const FormRegister = () => {
  const router = useRouter();

  function onFormSend(
    event: React.FormEvent,
    inputs: FormInputValuesProps,
    setErros: setErrosProps
  ) {
    // pegando o email e a senha.
    const username = `${inputs[0]}`;
    const email = `${inputs[1]}`;
    const password = `${inputs[2]}`;
    const password_check = `${inputs[3]}`;

    // Realizando o registro
    user()
      .register(username, email, password, password_check)
      .then((data) => {
        if (+data.status == 200) {
          router.push("/login");
        } else {
          setErros([data.data]);
        }
      })
      .catch((error: PromisseApiError) => {
        setErros([error.response.data.data]);
      });
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
        {
          type: "password",
          placeholder: "********",
          label: "VERIFICAR PASSWORD",
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
