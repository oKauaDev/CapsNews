import { Route } from "@/types/components/PrivateRouter";

const Routes: Route = {
  login: {
    redirect: "/conta",
    require_login: false,
  },
  register: {
    redirect: "/conta",
    require_login: false,
  },
  conta: {
    redirect: "/login",
    require_login: true,
  },
  create: {
    redirect: "/login",
    require_login: true,
  },
};

export default Routes;
