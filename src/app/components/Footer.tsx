import Sociales from "./Sociales";
import NavBar from "./NavBar";

function Footer() {
  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/nosotros", label: "Nosotros" },
  ];

  return (
    <footer className="bg-AzulCorporativo p-5 text-white space-y-10 flex flex-col">
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
      <div className="grid grid-cols-3 sm:grid-cols-3 gap-8 text-center sm:text-left">
        <div>
          <p className="font-bold mb-2 border-b border-gray-300 pb-1">Social</p>
          <Sociales className="flex flex-col md:flex-row items-center sm:items-start gap-2" />
        </div>

        <div>
          <p className="font-bold mb-2 border-b border-gray-300 pb-1">Links</p>
          <NavBar
            links={navLinks}
            className="grid items-center md:grid-cols-2 lg:grid-cols-3 text-sm gap-2"
          />
        </div>

        <div>
          <p className="font-bold mb-2 border-b border-gray-300 pb-1">Legal</p>
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
    </footer>
  );
}

export default Footer;
