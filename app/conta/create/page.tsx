import Navbar from "@/components/Navbar/Navbar";
import FormCreate from "./FormCreate";

export default function CreateNew() {
  return (
    <>
      <Navbar />
      <section className="anime-left mx-vw304 tablet:mx-vw128 mt-[13.333vh] mb-8">
        <h1 className="text-40px font-medium leading-tight tracking-wider text-secundary-1000 mb-[72px]">
          Criar postagem
        </h1>
        <FormCreate />
      </section>
    </>
  );
}
