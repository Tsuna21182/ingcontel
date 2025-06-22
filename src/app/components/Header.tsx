"use client";

import { useState } from "react";
import Image from "next/image";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavBar from "./NavBar";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute z-50 w-full">
      <section className="flex justify-between items-center p-5 md:p-10 lg:p-20">
        {/* Logo */}
        <Image
          src="/image/logo-ingcontel.png"
          alt="Logo"
          width={201}
          height={167}
          className="w-10 md:w-20"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Botón y menú */}
        <div className="flex items-center gap-3">
          <button
            className="text-white md:hidden" // Asegúrate de que el ícono sea visible
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars4Icon className="w-8 h-8" />
            )}
          </button>

          <NavBar
            links={navLinks}
            onLinkClick={() => setIsOpen(false)}
            className={`absolute z-10 top-full right-5 bg-white text-GrisOscuro md:text-white shadow-lg rounded-lg px-6 py-4 
            md:static md:shadow-none md:px-0 md:py-0 md:bg-transparent ${
              isOpen ? "flex" : "hidden"
            } md:flex`}
          />
        </div>
      </section>
    </header>
  );
}
