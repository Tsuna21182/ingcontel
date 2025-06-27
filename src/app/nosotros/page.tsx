"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function page() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-AzulCorporativo py-10 px-6"
    >
      <h1 className="text-3xl text-white font-bold text-center mb-6 md:mt-30 lg:mt-40">
        Nosotros
      </h1>
      <section className="grid md:grid-cols-2 justify-center items-center mt-10 md:mt-0 p-10 xl:p-13 bg-white rounded-2xl">
        <div>
          <p className="max-w-3xl mx-auto text-center text-gray-700">
            Somos una empresa con amplia trayectoria en telecomunicaciones,
            destacandonos por proyectos exitosos en fibra optica, cableado
            estructurado y soluciones tecnologicas para empresas y hogares a
            nivel nacional.
          </p>
          <div className="relative mt-10 w-full md:hidden">
            <Image
              src="/image/reunion.png"
              alt="imagen nosotros"
              width={1280}
              height={771}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="hidden md:block relative ">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="absolute -right-60 -top-[27rem] lg:-right-50 lg:-top-[27.5rem] w-[45rem] h-[55rem]"
          >
            <Image
              src="/image/nosotros.png"
              alt="Imagen nosotros"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row gap-10 mt-10">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-5 bg-white rounded-2xl"
        >
          <div className="rightPointPolygon bg-AzulBrillante w-50 p-2 text-white mt-10">
            <h2 className="font-bold uppercase text-2xl ml-10">misión</h2>
          </div>
          <p className="text-lg px-10 mb-10">
            Somos una empresa que brinda soluciones integrales de
            telecomunicaciones a través de infraestructura tecnológica adecuada
            y recurso humano competente, calificado y comprometido con el
            cumplimiento de las metas planteadas.
          </p>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-5 bg-white rounded-2xl"
        >
          <div className="rightPointPolygon bg-AzulBrillante w-50 p-2 text-white mt-10">
            <h2 className="font-bold uppercase text-2xl ml-10">visión</h2>
          </div>
          <p className="text-lg px-10 mb-10">
            Para el año 2025 <strong className="uppercase">ingcontel</strong>{" "}
            será reconocida a nivel nacional como una empresa a la vanguardia en
            el desarrillo de proyectos de telecomunicaciones, con innovación
            constante e infraestructura tecnológica.
          </p>
        </motion.section>
      </section>
    </motion.section>
  );
}

export default page;
