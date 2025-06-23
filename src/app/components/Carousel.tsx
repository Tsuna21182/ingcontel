"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/image/huawei.png",
  "/image/inmel.png",
  "/image/telebucaramanga.png",
  "/image/optecom.png",
  // Agrega más si las tienes en /public
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // 👇 Auto slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); // Limpia al desmontar
  }, []);

  return (
    <div className="relative w-60 overflow-hidden rounded-xl my-10">
      <div className="relative h-20 sm:h-46">
        <Image
          src={images[current]}
          alt={`Slide ${current + 1}`}
          fill
          className="object-contain transition-opacity duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
