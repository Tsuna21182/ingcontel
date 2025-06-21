"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type CardProps = {
  datos: {
    src: string;
    title: string;
    description: string;
  }[];
};

function Card({ datos }: CardProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-10">
      {datos.map((dato) => (
        <div
          key={dato.title}
          className="grid md:grid-cols-2 overflow-hidden shadow-xl rounded-xl"
        >
          <div
            className={`bg-white p-5 md:p-8 transition-all duration-1000 ease-in-out md:-mr-[3rem] md-clipLeft ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl xl:text-3xl font-bold lg:w-45">
              {dato.title}
            </h3>
            <p className="font-semibold text-sm lg:text-lg mt-5 md:w-40">
              {dato.description}
            </p>
          </div>

          <div
            className={`transition-all duration-1000 ease-in-out md:-ml-[3rem] md-clipRight ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <Image
              src={dato.src}
              alt="imagen tendido"
              width={1080}
              height={720}
              className="h-full object-cover w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
