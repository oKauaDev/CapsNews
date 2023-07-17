import Image from "next/image";
import React from "react";
import Nav from "./Nav";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="mx-vw128 mt-[60px] flex items-center">
      <Link href="/">
        <Image
          src="/logo-text.svg"
          priority={true}
          alt="Logo do CapsNews"
          width={77}
          height={40}
        />
      </Link>
      <Nav />
    </header>
  );
};

export default Navbar;
