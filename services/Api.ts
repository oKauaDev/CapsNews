import {
  NewApiTypes,
  NewsGetAllFunction,
  NewsGetAllPromisse,
  UserApiTypes,
} from "@/types/Api";
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
    return (
      await axiosInstance.post("register", {
        name,
        email,
        password,
        password_confirmation,
      })
    ).data;
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
    return (
      await axiosInstance.post(
        "edit",
        { name },
        { headers: { Authorization: `Bearer ${token}` } }
      )
    ).data;
  }

  return {
    register,
    login,
    get,
    edit,
  };
}

export function news(): NewApiTypes {
  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/news/",
  });

  async function getAll() {
    return (await axiosInstance.get("all")).data;
  }

  async function get(link: string) {
    return (await axiosInstance.get(`get/${link}`)).data;
  }

  async function view(link: string) {
    return (await axiosInstance.get(`view/${link}`)).data;
  }

  return {
    getAll,
    get,
    view,
  };
}
