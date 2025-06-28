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
      <h1 className="text-3xl md:text-5xl text-white font-bold text-center mb-10 md:mt-20 lg:mt-40">
        Nosotros
      </h1>
      <section className="grid md:grid-cols-2 justify-center items-center mt-10 md:mt-0 p-10 xl:p-13 bg-white rounded-2xl">
        <div>
          <p className="max-w-3xl mx-auto text-center text-gray-700">
            Somos una empresa con amplia trayectoria en el sector de las
            telecomunicaciones, destacándonos por el desarrollo exitoso de
            proyectos de fibra óptica, cableado estructurado y soluciones
            tecnológicas integrales para empresas y hogares en todo el
            territorio nacional.
          </p>
          <div className="relative mt-10 w-full md:hidden">
            <Image
              src="/image/reunion.webp"
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
              src="/image/nosotros.webp"
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
            Somos una empresa comprometida con brindar soluciones integrales en
            telecomunicaciones, mediante infraestructura tecnológica moderna y
            un equipo humano calificado, competente y enfocado en el
            cumplimiento de los objetivos estratégicos de nuestros clientes.
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
            Para el año 2025, <strong className="uppercase">Ingcontel</strong>{" "}
            será reconocida a nivel nacional como una empresa líder e innovadora
            en el desarrollo de proyectos de telecomunicaciones, destacándose
            por su evolución constante, excelencia operativa y solidez
            tecnológica.
          </p>
        </motion.section>
      </section>
      <section>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 pb-5 bg-white flex flex-col items-center rounded-2xl"
        >
          <div className="flex flex-col justify-center mb-10 items-center PolygonNosotros bg-AzulBrillante w-50 mt-5 text-Blanco p-4">
            <h2 className="font-bold uppercase text-2xl">Somos más</h2>
            <p className="text-GrisClaro font-light">Nuestra Historia</p>
          </div>
          <p className="text-lg px-10 mb-8">
            Contamos con más de 7 años de experiencia en el mercado nacional,
            desarrollando proyectos de alto impacto en el sector de las
            telecomunicaciones. Este recorrido nos ha permitido consolidar una
            trayectoria sólida, proyectándonos hacia el futuro con orgullo y
            compromiso.
          </p>
          <p className="text-lg px-10 mb-10">
            A lo largo de este tiempo, nuestros clientes nos han confiado
            actividades clave como tendido de red, inventario de
            infraestructura, mantenimiento y atención de emergencias,
            especialmente en redes de fibra óptica, donde hemos desplegado más
            de 700.000 metros lineales en distintas regiones del país.
          </p>
        </motion.section>
      </section>
    </motion.section>
  );
}

export default page;
