import Image from "next/image";

function page() {
  return (
    <section className="bg-AzulCorporativo">
      <div className="bg-AzulCorporativo h-96"></div>
      <h1 className="text-6xl absolute top-25 left-10 md:top-35 md:left-15 lg:top-45 lg:left-25 text-Blanco font-bold">
        Nosotros
      </h1>
      <section className="grid md:grid-cols-2 justify-center items-center mt-10 md:mt-0 p-10 xl:p-13 bg-white">
        <div>
          <p className="text-base xl:text-xl 2xl:text-3xl md:mr-8 3xl:ml-20">
            Somos una empresa con amplia trayectoria en telecomunicaciones,
            destacandonos por proyectos exitosos en fibra optica, cableado
            estructurado y soluciones tecnologicas para empresas y hogares a
            nivel nacional.
          </p>
        </div>
        <Image
          src="/image/nosotros.png"
          alt="imagen nosotros"
          width={853}
          height={1280}
          className="-mt-15 md:mt-0 md:absolute md:-top-25.5 md:left-40 2md:left-55 2md:-top-51 lg:-top-51 lg:left-75 xl:-top-40 xl:left-[30rem] 2xl:-top-30 2xl:left-[40rem] 3xl:-top-30 3xl:left-[60rem]"
        />
      </section>
      <section className="flex flex-col lg:flex-row gap-10 p-10 bg-white mt-10">
        <div className="space-y-5">
          <h2 className="font-bold uppercase text-2xl">misión</h2>
          <p className="text-lg">
            Somos una empresa que brinda soluciones integrales de
            telecomunicaciones a través de infraestructura tecnológica adecuada
            y recurso humano competente, calificado y comprometido con el
            cumplimiento de las metas planteadas.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="font-bold uppercase text-2xl">visión</h2>
          <p className="text-lg">
            Para el año 2025 <strong className="uppercase">ingcontel</strong>{" "}
            será reconocida a nivel nacional como una empresa a la vanguardia en
            el desarrillo de proyectos de telecomunicaciones, con innovación
            constante e infraestructura tecnológica.
          </p>
        </div>
      </section>
    </section>
  );
}

export default page;
