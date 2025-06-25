"use client";
import { useState } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function CotizarButton() {
  const [open, setOpen] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => {
      setOpen(false);
      setEnviado(false);
    }, 2000);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-AzulCorporativo text-white py-3 px-8 hover:bg-AzulBrillante transition-all duration-300 rounded-2xl text-lg font-semibold cursor-pointer"
      >
        Solicita tu cotización
      </button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        {enviado ? (
          <div className="text-center py-10">
            <p className="text-green-600 font-semibold text-lg">
              ¡Enviado con éxito!
            </p>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
              className="flex justify-center mt-4"
            >
              <FaCheckCircle className="text-green-500 text-5xl" />
            </motion.div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold mb-7 text-center">
              Solicita tu cotización
            </h2>
            <input
              required
              type="text"
              placeholder="Nombre"
              className="w-full border border-gray-500 px-4 py-4 rounded-lg placeholder:font-bold"
            />
            <input
              required
              type="email"
              placeholder="Correo"
              className="w-full border border-gray-500 px-4 py-4 rounded-lg placeholder:font-bold"
            />
            <textarea
              placeholder="Mensaje"
              className="w-full border border-gray-500 px-4 py-3 rounded-lg resize-none placeholder:font-bold"
              rows={3}
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold text-lg px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 cursor-pointer"
            >
              Enviar
            </button>
          </form>
        )}
      </Modal>
    </>
  );
}
