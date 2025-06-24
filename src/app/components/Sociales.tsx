import { SiFacebook, SiWhatsapp, SiInstagram } from "react-icons/si";

function Sociales({ className }: { className?: string | undefined }) {
  return (
    <nav className={`flex gap-6 items-center ${className}`}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <SiFacebook className="w-6 h-6 text-white hover:scale-110 transition-all duration-300" />
      </a>
      <a
        href="https://instagram.com/ingcontel/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiInstagram className="w-6 h-6 text-white hover:scale-110 transition-all duration-300" />
      </a>
      <a
        href="https://wa.me/573001112223"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiWhatsapp className="w-6 h-6 text-white hover:scale-110 transition-all duration-300" />
      </a>
    </nav>
  );
}

export default Sociales;
