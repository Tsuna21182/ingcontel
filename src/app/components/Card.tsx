"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

type CardProps = {
  datos: {
    src: string;
    title: string;
    description: string;
  }[];
};

export default function Card({ datos }: CardProps) {
  return (
    <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-10">
      {datos.map((dato) => (
        <CardItem key={dato.title} dato={dato} />
      ))}
    </div>
  );
}

function CardItem({
  dato,
}: {
  dato: { src: string; title: string; description: string };
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-5% 0px -5% 0px", once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="grid md:grid-cols-2 overflow-hidden shadow-xl rounded-xl"
    >
      <div
        className={`bg-white p-5 md:p-8 transition-all duration-700 ease-in-out md:-mr-[3rem] md-clipLeft ${
          isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <h3 className="text-2xl xl:text-3xl font-bold lg:w-45">{dato.title}</h3>
        <p className="font-semibold text-sm lg:text-lg mt-5 md:w-40">
          {dato.description}
        </p>
      </div>

      <div
        className={`transition-all duration-700 ease-in-out md:-ml-[3rem] md-clipRight ${
          isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <Image
          src={dato.src}
          alt="imagen tendido"
          width={1080}
          height={720}
          className="h-full object-cover w-full"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </motion.div>
  );
}
