import { UserTokenProps } from "./User";

// AuthContext
export interface AuthContextProps {
  user?: UserTokenProps;
  setUser?: React.Dispatch<React.SetStateAction<UserTokenProps | undefined>>;
}

// FilterContext
export type filters = "recent" | "relevants";

export interface FilterContextProps {
  filter?: filters;
  setFilter?: React.Dispatch<React.SetStateAction<filters>>;
}
