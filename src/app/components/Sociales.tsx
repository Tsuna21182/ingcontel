import { SiFacebook, SiWhatsapp, SiInstagram } from "react-icons/si";

function Sociales() {
  return (
    <nav className="flex gap-6 items-center">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <SiFacebook className="w-6 h-6 text-blue-600 hover:scale-110 transition-all duration-300" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <SiInstagram className="w-6 h-6 text-pink-500 hover:scale-110 transition-all duration-300" />
      </a>
      <a
        href="https://wa.me/573001112223"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiWhatsapp className="w-6 h-6 text-green-500 hover:scale-110 transition-all duration-300" />
      </a>
    </nav>
  );
}

export default Sociales;
