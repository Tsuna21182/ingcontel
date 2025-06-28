"use client";

import { Modal } from "../components";
import { motion } from "framer-motion";
import { useState } from "react";

function BtnPrincipal({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-AzulBrillante transition-all duration-300 text-Blanco hover:bg-AzulCorporativo self-end-safe cursor-pointer py-3 px-8 rounded-2xl text-lg font-semibold ${className}`}
      >
        {name}
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className={"bg-black/70"}
      >
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Recorrido
          </h2>
          <ul className="space-y-5 mt-5 list-disc list-inside text-white font-semibold text-lg mb-10">
            <li>
              Desmonte de infraestructura de telefonía pública en el área
              metropolitana de Bucaramanga durante el año 2017.
            </li>
            <li>
              Inventario de la infraestructura de 500 km de red de fibra óptica
              en el área metropolitana de Bucaramanga durante el año 2017.
            </li>
            <li>
              Soporte técnico para mantenimiento y atención de emergencias en
              una red de fibra óptica de 500 mil metros durante los años 2017 y
              2018.
            </li>
            <li>
              Ampliación de más de 200 clientes corporativos mediante tecnología
              de fibra óptica durante los años 2017 y 2018.
            </li>
            <li>
              Tendido de más de 250 mil metros de red de fibra óptica y conexión
              de clientes extremo a extremo (FTTH) en Bucaramanga, Cúcuta y
              Santa Marta entre los años 2017 y 2019.
            </li>
            <li>
              Levantamiento de infraestructura para nuevos diseños FTTH a nivel
              nacional, en ciudades como Cúcuta, Pasto, Pereira, Cundinamarca,
              Boyacá, Villavicencio, entre otras.
            </li>
            <li>
              Entre los años 2019 y 2021, se ejecutaron proyectos en ciudades
              como Bogotá y Cali, que incluyeron la construcción completa de más
              de 20 feeder y la entrega de más de 100.000 HHPP.
            </li>
          </ul>
        </motion.section>
      </Modal>
    </>
  );
}

export default BtnPrincipal;
