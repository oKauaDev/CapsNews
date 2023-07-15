export interface PrivateRouterProps {
  children: React.ReactNode | JSX.Element;
}

export interface Route {
  [key: string]: {
    redirect: string;
    require_login: boolean;
  };
}
