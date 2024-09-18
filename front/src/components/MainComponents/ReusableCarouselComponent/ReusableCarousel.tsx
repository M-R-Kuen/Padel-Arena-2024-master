import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import HoverBadge from "@/components/GeneralComponents/HoverBadge/HoverBadgeCircular";

interface ICarouselProps {
  images: {
    src: string;
    alt: string;
    title: string;
    href: string;
    categoria: string;
    precio: string;
    fechaInicio: string;
    fechaFin: string;
    inscription: "abiertas" | "cerradas";
  }[];
}

const Carousel: React.FC<ICarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const imagesPerSlide = 3; // Número de imágenes visibles por slide
  const gap = 4; // Espacio entre imágenes en Tailwind CSS (espacio de 1rem)
  const imageWidth = "w-80"; // Ancho fijo de las imágenes (por ejemplo, 20rem)
  const imageHeight = "h-60"; // Alto fijo de las imágenes (por ejemplo, 15rem)

  // Función para mover al siguiente slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(images.length / imagesPerSlide) - 1
        ? 0
        : prevIndex + 1
    );
  };

  // Función para mover al slide anterior
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(images.length / imagesPerSlide) - 1
        : prevIndex - 1
    );
  };

  const handleImageClick = (href: string) => {
    router.push(href);
  };

  return (
    <div className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-[1.2s] ease-[cubic-bezier(0.25, 0.1, 0.25, 1)]"
          style={{
            transform: `translateX(-${currentIndex * (100 / imagesPerSlide)}%)`,
            width: `${100 * Math.ceil(images.length / imagesPerSlide)}%`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`flex-none ${imageWidth} ${imageHeight} px-${gap} cursor-pointer relative`}
              onClick={() => handleImageClick(image.href)}
            >
              <div className="relative w-full h-full rounded-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="block w-full h-full rounded-xl transition duration-300 ease-in-out filter grayscale hover:grayscale-0"
                />
                <div className="absolute bottom-0 left-0 w-full text-white p-4 bg-gradient-to-t from-black">
                  <h3 className="text-lg radhiumz text-lime uppercase">
                    {image.title}
                  </h3>
                  <p className="text-md sfMedium uppercase mt-4">{`Categoria: ${image.categoria}`}</p>

                  <p className="text-sm sfMedium">{`${image.fechaInicio} - ${image.fechaFin}`}</p>

                  <p className="text-sm sfMedium text-lime">{`Precio:$${image.precio}`}</p>
                  {/* Badge Optional */}
                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
                    <HoverBadge status={image.inscription} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToPrevious}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
