"use client";
import React from "react";
import Image from "next/image";

interface TournamentCardProps {
  src: string;
  alt: string;
  title: string;
  genero: string;
  categoria?: string;
  inscripciones?: "abiertas" | "cerradas";
  precio?: string;
  fechaInicio?: string;
  fechaFin?: string;
  href: string;
  className?: string;
}

const TournamentCard: React.FC<TournamentCardProps> = ({
  src,
  alt,
  title,
  genero,
  categoria,
  inscripciones,
  precio,
  fechaInicio,
  fechaFin,
  href,
  className = "",
}) => {
  const handleImageClick = (href: string) => {
    window.location.href = href;
  };

  return (
    <div
      className={`flex-none w-full px-4 cursor-pointer ${className} group`}
      onClick={() => handleImageClick(href)}
    >
      <div className="w-full h-[300px] bg-white shadow-lg shadow-lime rounded-xl overflow-hidden flex flex-col justify-end border-2 border-lime relative">
        <div className="flex-1">
          <Image
            src={src}
            alt={alt}
            width={500}
            height={300}
            className="block w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <h3 className="text-2xl radhiumz uppercase text-white">{title}</h3>
          </div>
        </div>

        {/* Contenedor de información que aparece al hacer hover */}
        <div className="absolute inset-0 flex flex-col justify-center p-4 bg-black/70 transition-opacity duration-300 opacity-0 group-hover:opacity-100 space-y-2">
          {categoria && (
            <p className="text-lg text-white uppercase radhiumz">{`Categoría: ${categoria}`}</p>
          )}
          {precio && (
            <p className="text-lg text-white sfRegular">{`Precio: $${precio}`}</p>
          )}
          {fechaFin && fechaInicio && (
            <p className="text-lg text-white sfRegular">{`${fechaInicio} - ${fechaFin}`}</p>
          )}
          {inscripciones && (
            <p
              className={`text-lg uppercase sfBold  ${
                inscripciones === "abiertas" ? "text-green-400" : "text-red-400"
              }`}
            >
              {`Inscripciones: ${inscripciones}`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// interface TournamentCardProps {
//   src: string;
//   alt: string;
//   title: string;
//   genero: string;
//   categoria?: string;
//   inscripciones?: "abiertas" | "cerradas";
//   href: string;
//   className?: string;
// }

// const TournamentCard: React.FC<TournamentCardProps> = ({
//   src,
//   alt,
//   title,
//   genero,
//   categoria,
//   inscripciones,
//   href,
//   className = "",
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => setIsHovered(true);
//   const handleMouseLeave = () => setIsHovered(false);

//   const handleImageClick = (href: string) => {
//     window.location.href = href;
//   };

//   return (
//     <div
//       className={`flex-none w-full px-4 cursor-pointer ${className}`}
//       onClick={() => handleImageClick(href)}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="w-full h-[300px]shadow-lg shadow-lime rounded-xl overflow-hidden flex flex-col justify-end border-2 border-lime">
//         {/* Contenedor de la imagen */}
//         <div className="flex-1">
//           <Image
//             src={src}
//             alt={alt}
//             width={500}
//             height={300}
//             className="block w-full h-full object-cover"
//           />
//         </div>

//         {/* Contenedor de texto que se muestra cuando `isHovered` es true */}
//         {isHovered && (
//           <div className="flex flex-col justify-end p-4 bg-black/50 transition-opacity duration-300 text-white">
//             <h3 className="text-2xl radhiumz">{title}</h3>
//             <div className="flex w-3/4 justify-start uppercase sfBold">
//               <p className="text-lg">{genero}</p>
//               {categoria && <p className="text-lg text-white ">{categoria}</p>}
//               {inscripciones && inscripciones === "abiertas" ? (
//                 <p className="text-lg text-green-400 ml-10">{inscripciones}</p>
//               ) : (
//                 <p className="text-lg text-red-400 ml-10">{inscripciones}</p>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TournamentCard;
