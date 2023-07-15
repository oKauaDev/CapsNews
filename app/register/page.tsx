import Navbar from "@/components/Navbar/Navbar";
import FormRegister from "./FormRegister";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <Navbar />
      <section className="anime-left mx-vw304 tablet:mx-vw128 mt-[13.333vh] mb-8">
        <h1 className="text-40px font-medium leading-tight tracking-wider text-secundary-1000 mb-[4.5rem]">
          Registrar-se
        </h1>
        <FormRegister />
        <p className="text-14px text-secundary-900 leading-[20px] mt-3">
          Já tem uma conta ?{" "}
          <Link className="text-primary-300" href="/login">
            Clique aqui
          </Link>{" "}
          para logar na sua conta.
        </p>
      </section>
    </>
  );
}
