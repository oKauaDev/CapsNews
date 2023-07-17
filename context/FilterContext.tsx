"use client";

import { FilterContextProps, filters } from "@/types/Context";
import React from "react";

export const FilterContext = React.createContext<FilterContextProps>({
  filter: "relevants",
});

export const FilterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [filter, setFilter] = React.useState<filters>(getNewsFilter());

  function getNewsFilter(): filters {
    switch (localStorage.getItem("filter")) {
      case "recent":
        return "recent";
      case "relevants":
        return "relevants";
      default:
        return "relevants";
    }
  }

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
