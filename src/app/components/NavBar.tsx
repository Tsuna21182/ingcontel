"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavBarProps = {
  links: {
    href: string;
    label: string;
  }[];
  className?: string;
  onLinkClick?: () => void;
};

export default function NavBar({ links, className, onLinkClick }: NavBarProps) {
  const pathname = usePathname();

  return (
    <nav className={`font-semibold text-white ${className}`}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className={clsx(
            "py-2 px-4 rounded-xl transition-all duration-300 hover:bg-Blanco hover:text-GrisOscuro",
            {
              "bg-Blanco text-GrisOscuro": pathname === link.href,
            }
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
