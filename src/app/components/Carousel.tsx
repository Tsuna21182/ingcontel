"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/image/huawei.webp",
  "/image/inmel.webp",
  "/image/telebucaramanga.webp",
  "/image/optecom.webp",
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative md:w-auto md:p-5 overflow-hidden">
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
