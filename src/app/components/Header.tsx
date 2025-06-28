"use client";

import Image from "next/image";
import NavBar from "./NavBar";
import Example from "./FlyoutMenus";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
];

export default function Header() {
  return (
    <header className="absolute z-50 w-full">
      <section className="flex justify-between items-center p-5 md:p-10 lg:p-20">
        <Image
          src="/image/logo-ingcontel.webp"
          alt="Logo"
          width={201}
          height={167}
          className="w-10 md:w-20"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="flex items-center gap-3">
          <Example />

          <NavBar links={navLinks} className={`hidden md:flex gap-5`} />
        </div>
      </section>
    </header>
  );
}
