import NavBar from "./NavBar";

function Footer() {
  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/nosotros", label: "Nosotros" },
  ];

  return (
    <footer className="bg-AzulCorporativo p-5 text-white">
      <div className="text-sm">
        <h3 className="font-bold uppercase text-lg">ingcontel s.a.s</h3>
        <p>Cll 50 Eur if 30 - 25</p>
        <p>Bucaramanga, Santander</p>
      </div>
      <div>
        <NavBar links={navLinks} className={"flex-row text-sm my-3"} />
      </div>
      <div className="flex gap-3 text-sm">
        <div>
          <p className="font-semibold">Phone/fine</p>
          <p>1.800.201.1019</p>
        </div>
        <div>
          <p className="font-semibold">Email</p>
          <p>contacto@ingcontel.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
