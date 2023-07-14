import { UserTokenProps } from "./User";

// AuthContext
export interface AuthContextProps {
  user?: UserTokenProps;
  setUser?: React.Dispatch<React.SetStateAction<UserTokenProps | undefined>>;
}
