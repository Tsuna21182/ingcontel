import { ImageCarousel, BtnPrincipal } from "@/app/components";

function Recorrido() {
  return (
    <article className="p-5 bg-white rounded-2xl shadow-2xl m-10 md:mx-20 grid xl:grid-cols-2 gap-8 items-center">
      <section className="flex flex-col gap-5 shadow-2xl m-5 p-5 rounded-xl">
        <h2 className="text-2xl md:text-4xl font-bold">Recorrido</h2>
        <p className="text-lg md:text-xl">
          Entre los años 2021 y 2024, hemos ejecutado con éxito la construcción
          de más de 120.000 Hogares Pasados por la Planta (HHPP) en ciudades
          como Barrancabermeja, Ocaña, Ipiales, Santander de Quilichao, Buga y
          Bogotá. Además, se han instalado más de 10 nodos de alimentación
          (feeders) para optimizar la distribución de estos servicios.
        </p>
        <p className="text-lg md:text-xl">
          También hemos desarrollado redes preconectorizadas de fibra óptica,
          realizando el tendido del cableado y la instalación de HUB-box y
          SUB-box, brindando soporte técnico especializado para la empresa
          HUAWEI.
        </p>
        <BtnPrincipal name={"Ver más"} />
      </section>
      <ImageCarousel />
    </article>
  );
}

export default Recorrido;
