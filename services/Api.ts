import {
  NewApiTypes,
  NewsGetAllFunction,
  NewsGetAllPromisse,
  UserApiTypes,
} from "@/types/Api";
import { filters } from "@/types/Context";
import axios from "axios";

export function user(): UserApiTypes {
  const axiosInstance = axios.create({
    baseURL: "http://192.168.0.111:8000/user/",
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
    baseURL: "http://192.168.0.111:8000/news/",
  });

  async function getAll(type: filters, p: number, m: number) {
    return (await axiosInstance.get(`all?type=${type}&p=${p}&m=${m}`)).data;
  }

  async function get(link: string) {
    return (await axiosInstance.get(`get/${link}`)).data;
  }

  async function view(link: string) {
    return (await axiosInstance.get(`view/${link}`)).data;
  }

  async function create(
    user_email: string,
    title: string,
    content: string,
    type: string
  ) {
    return (
      await axiosInstance.post("create", {
        user_email,
        title,
        content,
        type,
      })
    ).data;
  }

  return {
    getAll,
    get,
    view,
    create,
  };
}
