import { UserApiTypes } from "@/types/Api";
import axios from "axios";

export function user(): UserApiTypes {
  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/user/",
  });

  // Registrar o usuário
  async function register(
    name: string,
    email: string,
    password: string,
    password_confirmation: string
  ) {
    return fetch("").then((r) => r.json());
  }

  // Logar com o usuário
  async function login(email: string, password: string) {
    return (
      await axiosInstance.post("login", {
        email,
        password,
      })
    ).data;
  }

  // Pegar os dados do usuário
  async function get(token: string) {
    return (
      await axiosInstance.get("get", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    ).data;
  }

  // Editar o usuário
  async function edit(token: string, name: string) {
    return fetch("").then((r) => r.json());
  }

  return {
    register,
    login,
    get,
    edit,
  };
}
