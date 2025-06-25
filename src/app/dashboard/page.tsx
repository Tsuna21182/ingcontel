"use client";

import Image from "next/image";
import CotizarButton from "../components/CotizarButton";
import ServiciosDestacados from "./secciones/ServiciosDestacados";
import Elegirnos from "./secciones/Elegirnos";
import { useState, useEffect } from "react";
import ImageCarousel from "../components/Carousel";

function DashboarPage() {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMostrar(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <section className="h-[60vh] md:h-[30rem] lg:h-[40rem] w-full ">
        <div className="relative h-full w-full">
          <Image
            src="/image/redes-telecomunicaciones-dominion.jpg"
            alt="Imagen Hero"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div
            className={`relative z-10 flex flex-col justify-center h-full px-6 md:px-24 max-w-4xl text-white transition-all duration-1000 ${
              mostrar ? " translate-x-0" : " translate-x-full"
            }`}
          >
            <h1
              className={`text-3xl md:text-4xl font-extrabold uppercase leading-tight transition-all duration-1000 mt-5`}
            >
              ingcontel
            </h1>
            <h2 className="text-xl mt-5 md:text-2xl font-bold uppercase leading-tight">
              ¡Conectamos Colombia con Innovación!
            </h2>
            <p className="text-lg md:text-xl font-light my-4 lowercase">
              Soluciones avanzadas en redes, fibra óptica y telecomunicaciones.
            </p>
          </div>
          <div className="absolute top-96 left-6 z-20 md:top-[23rem] md:left-22 lg:top-[26rem]">
            <CotizarButton />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <ServiciosDestacados />
      </section>
      <section className="mt-10">
        <Elegirnos />
      </section>
      <section className="mt-10 flex justify-around">
        <ImageCarousel />
        <div className="hidden md:block">
          <ImageCarousel />
        </div>
      </section>
    </>
  );
}

export default DashboarPage;
