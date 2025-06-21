import Card from "@/app/components/Card";

function ServiciosDestacados() {
  const serviciosDestacados = [
    {
      src: "/image/tendido-aereo.jpg",
      title: "Fibra Optica Aerea",
      description: "Respetando las normativas y protocolos.",
    },
    {
      src: "/image/tendido-canalizado.jpeg",
      title: "Canalizacion de Fibra Optica",
      description: "Utilizando materiales de calidad y duraderos.",
    },
    {
      src: "/image/odf.webp",
      title: "Instalacion de ODF",
      description: "Generando una transmision sin perdidas y certificado.",
    },
  ];

  return (
    <section className="flex flex-col gap-5 p-10 md:p-20">
      <h2 className="text-3xl md:text-5xl font-bold mb-15 text-center">
        Servicios Destacados
      </h2>
      <Card datos={serviciosDestacados} />
    </section>
  );
}

export default ServiciosDestacados;
