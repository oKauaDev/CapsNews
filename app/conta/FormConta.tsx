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

const FormConta = () => {
  const context = React.useContext(AuthContext);
  const token = localStorage.getItem("user_token");

  function onFormSend(
    event: React.FormEvent,
    inputs: FormInputValuesProps,
    setErros: setErrosProps
  ) {
    if (token) {
      // pegando o email e a senha.
      const new_name = `${inputs[0]}`;

      if (new_name === context.user?.name) {
        setErros([`Seu nome de usuário já é ${new_name}`]);
      }

      // Realizar a edição do usuário
      user()
        .edit(token, new_name)
        .then((data) => {
          if (
            +data.status == 200 &&
            context.setUser &&
            context.user &&
            data.token
          ) {
            // Editando o nome no contexto.
            context.setUser({
              ...context.user,
              name: new_name,
            });
            localStorage.setItem("user_token", data.token);
          } else {
            setErros([data.data]);
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
          valueinput: context.user?.name ?? "",
          type: "text",
          label: "NOME DE USUÁRIO",
          required: true,
          regexp: regexps.username,
          errormessage:
            "O nome de usuários dev ter no mínimo 6 letras, não pode conter espaços e nem caracteres especiais.",
        },
      ]}
      button={{
        text: "EDITAR CONTA",
      }}
    />
  );
};

export default FormConta;
