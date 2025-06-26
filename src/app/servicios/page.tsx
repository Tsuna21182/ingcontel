import InfoCard from "../components/InfoCard";
import datosServicios from "@/data/datosServicios";

function page() {
  return (
    <section>
      <div className="bg-AzulCorporativo h-96"></div>
      <h1 className="text-6xl absolute top-25 left-10 md:top-35 md:left-15 lg:top-45 lg:left-25 text-Blanco font-bold">
        Servicios
      </h1>
      <section className="flex justify-center items-center my-10">
        <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 p-5 auto-rows-[22rem] xl:last:col-span-2 2xl:grid-cols-4">
          {datosServicios.map((item) => (
            <li
              key={item.id}
              className={`w-full h-full ${
                item.id === datosServicios.length - 1
                  ? "xl:col-start-2 xl:row-start-2 2xl:col-start-auto 2xl:row-start-auto"
                  : ""
              }`}
            >
              <InfoCard
                title={item.title}
                description={item.description}
                imageUrl={item.imagenUrl}
              />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default page;
