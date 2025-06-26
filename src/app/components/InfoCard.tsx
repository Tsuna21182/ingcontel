"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type InfoCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function InfoCard({
  title,
  description,
  imageUrl,
}: InfoCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl shadow-xl w-full max-w-sm min-h-[22rem] bg-white backdrop-blur-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div
          className={`absolute inset-0  ${
            expanded ? "bg-black/70" : "bg-black/30"
          }`}
        />
      </div>

      <div className="relative z-10  flex flex-col p-6 text-white">
        <h3 className={`text-2xl font-bold mb-3`}>{title}</h3>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.p
              className="text-lg opacity-90 "
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.5 }}
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>

        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-block px-4 py-2 bg-white text-black font-semibold rounded-lg text-sm hover:bg-gray-100 transition-all duration-300 cursor-pointer self-baseline-last mt-10"
        >
          {expanded ? "Ocultar" : "Ver más"}
        </button>
      </div>
    </motion.div>
  );
}
