import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Elegirnos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-5% 0px -5% 0px" });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="grid md:grid-cols-2 md:items-center m-10 md:mx-20 mt-0 bg-Blanco rounded-2xl shadow-xl"
    >
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
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </motion.section>
  );
}

export default Elegirnos;
