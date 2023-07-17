"use client";

import Navbar from "@/components/Navbar/Navbar";
import News from "./News";
import React from "react";
import { FilterContext } from "@/context/FilterContext";
import cooldownFunction from "@/utils/cooldownFunction";
import setDebounce from "@/utils/setDebounce";

export default function Home() {
  const contextFilter = React.useContext(FilterContext);
  const [max, setmax] = React.useState<number>(10);

  React.useEffect(() => {
    function onScrollPage() {
      setDebounce(() => {
        const heightDocument = document.documentElement.offsetHeight;
        const { clientHeight, scrollTop } = document.documentElement;
        const scrollTopY = scrollTop + clientHeight;
        if (heightDocument - scrollTopY < 200) {
          cooldownFunction(() => {
            setmax((max) => max + 10);
          }, 2500);
        }
      }, 75);
    }

    window.addEventListener("scroll", onScrollPage);

    return () => {
      window.removeEventListener("scroll", onScrollPage);
    };
  }, []);

  return (
    <>
      <Navbar />
      <News type={contextFilter.filter ?? "relevants"} p={0} m={max} />
    </>
  );
}
