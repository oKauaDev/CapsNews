"use client";

import { FormInputValuesProps, FormProps } from "@/types/components/Form";
import React from "react";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

const Form: React.FC<FormProps> = ({ inputs, button, onSend }) => {
  const [formInputValues, setFormInputValues] =
    React.useState<FormInputValuesProps>({});

  const [errosInputs, setErrosInputs] = React.useState<string[]>([]);

  // Verificar se os inputs possuim já um valor.
  React.useEffect(() => {
    inputs.forEach((input, i) => {
      if (input.valueinput) {
        setFormInputValues((e) => {
          return {
            ...e,
            [input?.key ? +input?.key : i]: `${input.valueinput}`,
          };
        });
      }
    });
  }, [inputs]);

  // Evento de todos os inputs para ataulizar na variavel
  function onInputChange(i: string, event: ChangeEvent) {
    if (errosInputs) {
      setErrosInputs([]);
    }

    let value = "";
    const target = event.currentTarget ?? event.target;

    switch (target.type) {
      case "radio":
        value = target.parentElement?.children[0].innerHTML ?? "";
        break;
      default:
        value = event.currentTarget?.value ?? event.target.value;
        break;
    }

    setFormInputValues((e) => {
      return {
        ...e,
        [i]: `${value}`,
      };
    });
  }

  function getInputErros() {
    return inputs.filter((input, index) => {
      const { regexp } = input;
      const value = formInputValues[index];

      if (regexp) {
        return !regexp.test(`${value}`);
      } else {
        return false;
      }
    });
  }

  // Evento de quando o form é enviado
  function onSubmitForm(event: React.FormEvent) {
    event.preventDefault();
    const erros = getInputErros();
    if (erros.length > 0) {
      setErrosInputs(
        erros.map(
          (erro) =>
            erro.errormessage ??
            `Ouve um erro no envio do formulário${
              ", confira o campo " + erro.label?.toLocaleLowerCase() ??
              ", verifique os campos."
            }`
        )
      );
    } else {
      if (onSend) onSend(event, formInputValues, setErrosInputs);
    }
  }

  return (
    <form onSubmit={onSubmitForm}>
      <div className="flex flex-col gap-8">
        {inputs.map(
          (
            {
              label,
              onChange,
              className,
              labelClassName,
              containerclassname,
              key,
              ...input
            },
            i
          ) => {
            return (
              <label key={i} className={containerclassname ?? ""}>
                <p
                  className={`${
                    input.defaultstyles === "false"
                      ? ""
                      : "text-secundary-800 font-medium tracking-wide text-14px leading-snug"
                  } ${labelClassName ?? ""}`}
                >
                  {label}
                </p>
                <input
                  {...input}
                  value={formInputValues[i] ?? ""}
                  className={`${
                    input.defaultstyles === "false"
                      ? ""
                      : "block mt-3 w-full bg-secundary-200 py-3 px-4 outline-none box-border text-secundary-1000 placeholder:text-secundary-700"
                  } ${className ?? ""}`}
                  onChange={(event) => {
                    // Executar o callback do input enviado no formulário
                    if (onChange) onChange(event);
                    // Executar o callback padrão pra setar o valor.
                    onInputChange(key ? key : `${i}`, event);
                  }}
                />
              </label>
            );
          }
        )}
      </div>
      <div className="mt-8 flex flex-col gap-4">
        {errosInputs.map((error) => {
          return (
            <p key={error} className="p-4 bg-red-300 text-red-950">
              {error}
            </p>
          );
        })}
      </div>
      <button
        {...button}
        className={`block px-4 py-3 bg-primary-300 text-primary-500 rounded transition duration-300 hover:shadow-button hover:scale-[1.01] w-full font-medium tracking-wider mt-16 ${button.className}`}
      >
        {button.text}
      </button>
    </form>
  );
};

export default Form;
