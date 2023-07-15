"use client";

import useAuth from "@/hooks/useAuth";
import { PrivateRouterProps } from "@/types/components/PrivateRouter";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Routes from "./Routes";

const PrivateRouter: React.FC<PrivateRouterProps> = ({ children }) => {
  const router = useRouter();
  const Auth = useAuth();
  const pathname = usePathname().split("/");
  const path = pathname[pathname.length - 1];
  const route = Routes[path];
  const user = Auth.Get();
  const [returnComponent, setReturnComponent] =
    React.useState<React.ReactNode | null>(null);

  React.useEffect(() => {
    if (!route) {
      setReturnComponent(<>{children}</>);
      return;
    }

    // Verifica se requer login
    if (route.require_login) {
      // verifica se o usuário é logado.
      if (user.email && user.email !== "") {
        setReturnComponent(<>{children}</>);
      } else {
        router.push(route.redirect);
      }
    } else {
      // Faz o processo inversso
      if (user.email && user.email !== "") {
        router.push(route.redirect);
      } else {
        setReturnComponent(<>{children}</>);
      }
    }
  }, [children, route, router, user.email]);

  // Se a rota não estiver registarda, vai retornar ela.

  return returnComponent;
};

export default PrivateRouter;
