import Image from "next/image";

function Elegirnos() {
  return (
    <section className="grid md:grid-cols-2 md:items-center m-10 md:m-20 bg-Blanco rounded-2xl shadow-xl">
      <div className="p-10 flex flex-col">
        <h3 className="text-2xl md:text-4xl font-bold">¿Por Qué Elegirnos?</h3>
        <p className="mt-10 text-xl md:text-2xl">
          Contamos con mas de 10 años de expreriencia brindando soluciones y
          atencion personalizada.{" "}
        </p>
      </div>
      <div className="">
        <Image
          src="/image/porque-elegirnos.webp"
          alt="imagen elegirnos"
          width={1280}
          height={720}
          className="md:p-5 rounded-b-2xl"
        />
      </div>
    </section>
  );
}

export default Elegirnos;
