import { Card } from "@/app/components";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function ServiciosDestacados() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-5% 0px -5% 0px" });

  const serviciosDestacados = [
    {
      src: "/image/tendido-aereo.webp",
      title: "Fibra Optica Aerea",
      description: "Respetando las normativas y protocolos.",
    },
    {
      src: "/image/tendido-canalizado.webp",
      title: "Canalizacion de Fibra Optica",
      description: "Utilizando materiales de calidad y duraderos.",
    },
    {
      src: "/image/odf.webp",
      title: "Instalacion de ODF",
      description: "Generando una transmision sin perdidas y certificado.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex flex-col gap-5 px-10 md:px-20"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-5 text-center">
        Servicios Destacados
      </h2>
      <Card datos={serviciosDestacados} />
    </motion.section>
  );
}

export default ServiciosDestacados;
