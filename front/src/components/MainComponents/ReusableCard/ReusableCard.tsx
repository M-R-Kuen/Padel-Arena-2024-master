import React from "react";
import Image from "next/image";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  additionalInfo?: { [key: string]: string };
  className?: string;
  additionalComponent?: React.ReactNode;
}
const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  additionalInfo,
  className,
  additionalComponent,
}) => {
  return (
    <div
      className={`relative group overflow-hidden rounded-lg shadow-lg ${className}`}>
      {/* Fondo con efecto de blur */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-500 transform scale-105 bg-cover bg-center filter blur-sm group-hover:blur-none group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}></div>

      {/* Contenido principal de la tarjeta */}
      <div className="relative z-10 p-6 bg-white bg-opacity-70 group-hover:bg-opacity-100 transition duration-500">
        <Image
          className="w-full h-48 object-cover rounded-t-lg"
          src={imageUrl}
          alt={title}
          width={500}
          height={500}
        />
        <div className="radhiumz text-2xl text-center uppercase md:text-4xl mb-2 mt-4">
          {title}
        </div>
        <p className="text-gray-700 text-base sfMedium">{description}</p>
        {additionalInfo && (
          <div className="mt-4 sfBold text-black">
            {Object.entries(additionalInfo).map(([key, value]) => (
              <div
                key={key}
                className={` text-md ${
                  key === "Inscripciones" && value === "cerrada"
                    ? "text-red-500 uppercase"
                    : ""
                }`}>
                <span className="sfRegular text-gray-600">{key}:</span> {value}
              </div>
            ))}
          </div>
        )}
        {additionalComponent}
      </div>

      {/* Efecto de sombra en hover */}
      <div className="absolute inset-0 z-20 transition-shadow duration-500 shadow-none group-hover:shadow-2xl"></div>

      {/* Efecto de luz circular en hover */}
      <div className="absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default Card;
