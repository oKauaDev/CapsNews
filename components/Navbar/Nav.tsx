"use client";

import { AuthContext } from "@/context/AuthContext";
import { FilterContext } from "@/context/FilterContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type filters = "recent" | "relevants";

const Nav = () => {
  const context = React.useContext(AuthContext);
  const contextFilter = React.useContext(FilterContext);
  const route = useRouter();

  function setNewsFilter(filter: filters) {
    if (contextFilter.setFilter) {
      localStorage.setItem("filter", filter);
      contextFilter.setFilter(filter);
      route.push("/");
    }
  }

  return (
    <nav className="ml-[11.875vw] flex justify-between items-center gap-4 w-full laptop:ml-[5vw] tablet:justify-end">
      <ul className="flex gap-8 items-center tablet:gap-4">
        <li
          className={`cursor-pointer leading-5 text-secundary-1000 phone:text-14px ${
            contextFilter?.filter === "relevants"
              ? "after:block after:w-4/5 after:bg-secundary-1000 after:h-[2px]"
              : ""
          }`}
          onClick={() => setNewsFilter("relevants")}
        >
          Relevantes
        </li>
        <li
          className={`cursor-pointer leading-5 text-secundary-1000 phone:text-14px  ${
            contextFilter?.filter === "recent"
              ? "after:block after:w-4/5 after:bg-secundary-1000 after:h-[2px]"
              : ""
          }`}
          onClick={() => setNewsFilter("recent")}
        >
          Recentes
        </li>
      </ul>
      <Link
        href={context.user?.name ? "/conta" : "/login"}
        className="block px-4 py-2 bg-primary-300 text-primary-500 rounded transition duration-300 hover:shadow-button hover:scale-[1.01] phone:px-2 phone:py-1 phone:text-14px"
      >
        {context.user?.name ? context.user.name : "ENTRAR"}
      </Link>
    </nav>
  );
};

export default Nav;
