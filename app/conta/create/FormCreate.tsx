"use client";

import { AuthContext } from "@/context/AuthContext";
import { news } from "@/services/Api";
import { PromisseApiError } from "@/types/Api";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

const FormCreate = () => {
  const context = React.useContext(AuthContext);
  const route = useRouter();

  const [title, setTitle] = React.useState("");
  const [type, setType] = React.useState("Linguagem de programação");
  const [content, setContent] = React.useState("");

  const [errosInputs, setErrosInputs] = React.useState<string[]>([]);

  function onFormSubmit(event: FormEvent) {
    event.preventDefault();
    const regexpErros: string[] = [];

    if (!/[\w\W]{5,}/.test(title)) {
      regexpErros.push("Seu título deve ter no mínimo 5 caracteres.");
    }

    if (!/[\w\W]{16,}/.test(content)) {
      regexpErros.push("Sua postagem deve ter no mínimo 16 caracteres.");
    }

    if (regexpErros.length > 0) {
      setErrosInputs(regexpErros);
      return;
    }

    if (context.user) {
      news()
        .create(context.user.email, title, content, type)
        .then((data) => {
          if (+data.status == 200) {
            route.push("/");
          } else {
            setErrosInputs([data.data]);
          }
        })
        .catch((error: PromisseApiError) => {
          setErrosInputs([error.response.data.data]);
        });
    }
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        <p className="text-secundary-800 font-medium tracking-wide text-14px leading-snug">
          TÍTULO DA POSTAGEM
        </p>
        <input
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          className="block mt-3 w-full bg-secundary-200 py-3 px-4 outline-none box-border text-secundary-1000 placeholder:text-secundary-700"
        />
      </label>

      <div className="mt-8 flex gap-8 flex-wrap mb-8">
        <label className="flex gap-4 items-center bg-secundary-200 py-2 px-4 w-max cursor-pointer">
          <input
            type="radio"
            className="hidden"
            checked={type === "Linguagem de programação"}
            onChange={() => setType("Linguagem de programação")}
          />
          <span
            className={`w-3 h-3 rounded-full border-2 border-utils-orange block ${
              type == "Linguagem de programação" ? "bg-utils-orange" : ""
            }`}
          />
          Linguagem de programação
        </label>

        <label className="flex gap-4 items-center bg-secundary-200 py-2 px-4 w-max cursor-pointer">
          <input
            type="radio"
            className="hidden"
            checked={type === "Framework"}
            onChange={({ target }) => setType("Framework")}
          />
          <span
            className={`w-3 h-3 rounded-full border-2 border-utils-purple block ${
              type == "Framework" ? "bg-utils-purple" : ""
            }`}
          />
          Framework
        </label>

        <label className="flex gap-4 items-center bg-secundary-200 py-2 px-4 w-max cursor-pointer">
          <input
            type="radio"
            className="hidden"
            checked={type === "Biblioteca"}
            onChange={({ target }) => setType("Biblioteca")}
          />
          <span
            className={`w-3 h-3 rounded-full border-2 border-utils-green block ${
              type == "Biblioteca" ? "bg-utils-green" : ""
            }`}
          />
          Biblioteca
        </label>

        <label className="flex gap-4 items-center bg-secundary-200 py-2 px-4 w-max cursor-pointer">
          <input
            type="radio"
            className="hidden"
            checked={type === "Carreira"}
            onChange={({ target }) => setType("Carreira")}
          />
          <span
            className={`w-3 h-3 rounded-full border-2 border-utils-blue block ${
              type == "Carreira" ? "bg-utils-blue" : ""
            }`}
          />
          Carreira
        </label>

        <label className="flex gap-4 items-center bg-secundary-200 py-2 px-4 w-max cursor-pointer">
          <input
            type="radio"
            className="hidden"
            checked={type === "Outros"}
            onChange={({ target }) => setType("Outros")}
          />
          <span
            className={`w-3 h-3 rounded-full border-2 border-utils-gray block ${
              type == "Outros" ? "bg-utils-gray" : ""
            }`}
          />
          Outros
        </label>
      </div>

      <label>
        <p className="text-secundary-800 font-medium tracking-wide text-14px leading-snug">
          POSTAGEM
        </p>
        <textarea
          onChange={({ target }) => setContent(target.value)}
          defaultValue={content}
          className="block mt-3 w-full min-h-[300px] bg-secundary-200 py-3 px-4 outline-none box-border text-secundary-1000 placeholder:text-secundary-700"
        ></textarea>
      </label>

      <div className="mt-8 flex flex-col gap-4">
        {errosInputs.map((error) => {
          return (
            <p key={error} className="p-4 bg-red-300 text-red-950">
              {error}
            </p>
          );
        })}
      </div>

      <button className="block px-4 py-3 bg-primary-300 text-primary-500 rounded transition duration-300 hover:shadow-button hover:scale-[1.01] w-full font-medium tracking-wider mt-16">
        CRIAR POSTAGEM
      </button>
    </form>
  );
};

export default FormCreate;
