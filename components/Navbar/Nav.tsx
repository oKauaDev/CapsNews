"use client";

import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const context = React.useContext(AuthContext);

  return (
    <nav className="ml-[11.875vw] flex justify-between items-center gap-4 w-full laptop:ml-[5vw] tablet:justify-end">
      <ul className="flex gap-8 items-center tablet:gap-4">
        <li className="cursor-pointer leading-5 text-secundary-1000 phone:text-14px after:block after:w-4/5 after:bg-secundary-1000 after:h-[2px]">
          Relevantes
        </li>
        <li className="cursor-pointer leading-5 text-secundary-1000 phone:text-14px">
          Recentes
        </li>
      </ul>
      <Link
        href={context.user?.name ? "conta" : "login"}
        className="block px-4 py-2 bg-primary-300 text-primary-500 rounded transition duration-300 hover:shadow-button hover:scale-[1.01] phone:px-2 phone:py-1 phone:text-14px"
      >
        {context.user?.name ? context.user.name : "ENTRAR"}
      </Link>
    </nav>
  );
};

export default Nav;
