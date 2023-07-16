import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import FormConta from "./FormConta";

export default function Conta() {
  return (
    <>
      <Navbar />
      <section className="anime-left mx-vw304 tablet:mx-vw128 mt-[13.333vh] mb-8">
        <div className="mb-[4.5rem] flex w-full items-center justify-between">
          <h1 className="text-40px font-medium leading-tight tracking-wider text-secundary-1000">
            Sua Conta
          </h1>
          <Link className="p-3 bg-primary-300 rounded-sm" href="">
            <Image
              src="/add.svg"
              width={18.67}
              height={18.67}
              alt="Adicionar postagem"
            />
          </Link>
        </div>
        <FormConta />
      </section>
    </>
  );
}
