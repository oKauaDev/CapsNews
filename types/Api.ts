import { filters } from "./Context";
import { New } from "./News";
import { UserTokenProps } from "./User";

export interface PromisseApiError<T = string> {
  response: {
    data: {
      data: T;
      status: 200 | 400 | 500;
    };
    status: number;
  };
}

// Usuários
export interface UserApiTypes {
  register: UserRegisterFunction;
  login: UserLoginFunction;
  get: UserGetFunction;
  edit: UserEditFunction;
}

// Registro
export interface UserRegisterPromise {
  status: number;
  data: string;
}

export type UserRegisterFunction = (
  name: string,
  email: string,
  password: string,
  password_confirmation: string
) => Promise<UserRegisterPromise>;

// Login
export interface UserLoginPromise {
  status: number;
  data: string;
  token?: string;
}

export type UserLoginFunction = (
  email: string,
  password: string
) => Promise<UserLoginPromise>;

//GetUser
export interface UserGetPromise {
  status: number;
  data: string | UserTokenProps;
}

export type UserGetFunction = (token: string) => Promise<UserGetPromise>;

// EditUser
export interface UserEditPromise {
  status: number;
  data: string;
  token?: string;
}

export type UserEditFunction = (
  token: string,
  name: string
) => Promise<UserEditPromise>;

// News
export interface NewApiTypes {
  getAll: NewsGetAllFunction;
  get: NewGetFunction;
  view: NewViewFunction;
  create: NewCreateFunction;
}

// NewGetAll
export interface NewsGetAllPromisse {
  status: number;
  data: New[];
}

export type NewsGetAllFunction = (
  type: filters,
  p: number,
  m: number
) => Promise<NewsGetAllPromisse>;

// GetMew
export interface NewGetPromisse {
  status: number;
  data: New;
}

export type NewGetFunction = (link: string) => Promise<NewGetPromisse>;

// ViewNew
export interface NewViewPromisse {
  status: number;
  data: string;
}

export type NewViewFunction = (link: string) => Promise<NewViewPromisse>;

// CreateNew
export interface NewCreatePromisse {
  status: number;
  data: string;
}

export type NewCreateFunction = (
  user_email: string,
  title: string,
  content: string,
  type: string
) => Promise<NewCreatePromisse>;
