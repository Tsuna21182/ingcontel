"use client";

import { motion } from "framer-motion";
import Sociales from "./Sociales";
import NavBar from "./NavBar";

function Footer() {
  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/nosotros", label: "Nosotros" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-AzulCorporativo p-5 text-white space-y-10 flex flex-col"
    >
      <div className="text-sm space-y-5">
        <div>
          <h3 className="font-bold uppercase text-lg">ingcontel s.a.s</h3>
          <p>Cll 50 Eur if 30 - 25</p>
          <p>Bucaramanga, Santander</p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 text-sm">
          <div>
            <p className="font-semibold">Phone/fine</p>
            <p>1.800.201.1019</p>
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p>ingcontelsas@gmail.com</p>
            <p>VictorNavarroingresidente@ingcontel.com</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        <div>
          <p className="font-bold mb-2 border-b border-gray-500 pb-1">Social</p>
          <Sociales className="flex justify-center md:flex-row items-center gap-2" />
        </div>

        <div>
          <p className="font-bold mb-2 border-b border-gray-500 pb-1">Links</p>
          <NavBar
            links={navLinks}
            className="grid items-center md:grid-cols-2 lg:grid-cols-3 text-sm gap-2"
            disableActive={true}
          />
        </div>

        <div>
          <p className="font-bold mb-2 border-b border-gray-500 pb-1">Legal</p>
          <div className="flex flex-col items-center sm:items-start lg:flex-row text-sm gap-5">
            <a href="#" className="font-semibold">
              Términos de servicio
            </a>
            <a href="#" className="font-semibold">
              Políticas de privacidad
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
