"use client";
import { useState } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaUser,
  FaEnvelope,
  FaRegCommentDots,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function CotizarButton() {
  const [open, setOpen] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const adminTemplateID =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN_ID!;
      const userTemplateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_USER_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      await emailjs.send(serviceID, adminTemplateID, formData, publicKey);

      await emailjs.send(serviceID, userTemplateID, formData, publicKey);

      setEnviado(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setOpen(false);
        setEnviado(false);
      }, 3000);
    } catch (err) {
      console.error("Error al enviar:", err);
      setError("Hubo un error al enviar el formulario");
    }
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
            <p className="text-green-400 font-bold text-xl">
              ¡Enviado con éxito!
            </p>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
              className="flex justify-center mt-4"
            >
              <FaCheckCircle className="text-green-400 text-5xl" />
            </motion.div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold mb-7 text-center text-white">
              Solicita tu cotización
            </h2>
            <div className="flex items-center border border-white rounded-lg px-4 py-3 text-white">
              <FaUser className="mr-3 w-8 h-8 text-white" />
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                className="w-full  text-white font-semibold placeholder:font-bold placeholder:text-white outline-0"
                required
              />
            </div>
            <div className="flex items-center border border-white rounded-lg px-4 py-3 text-white">
              <FaEnvelope className="mr-3 w-8 h-8 text-white" />
              <input
                type="email"
                name="email"
                placeholder="Correo"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent outline-none placeholder:font-bold placeholder:text-white text-white font-semibold"
                required
              />
            </div>
            <div className="flex items-start border border-white rounded-lg px-4 py-3 text-white">
              <FaRegCommentDots className=" mr-3 w-8 h-8 text-white" />
              <textarea
                name="message"
                placeholder="Mensaje"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent outline-none resize-none placeholder:font-bold placeholder:text-white text-white font-semibold"
                rows={3}
                required
              />
            </div>
            {error && <p className="text-red-400 font-semibold">{error}</p>}

            <button
              type="submit"
              disabled={enviado}
              className={`w-full bg-indigo-500 text-white font-semibold text-lg px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                enviado
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-indigo-700"
              }`}
            >
              Enviar
            </button>
          </form>
        )}
      </Modal>
    </>
  );
}
