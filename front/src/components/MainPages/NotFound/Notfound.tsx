import React from "react";
import Image from "next/image";
import Link from "next/link";
const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-4 ">
      {/* Header Section */}
      <div className="text-center mt-20">
        <h1 className="text-9xl radhiumz mb-4">404</h1>
        <p className="text-xl text-white radhiumz mb-8">
          Parece que alguien cometió un error.
        </p>
        <p className="text-lime text-4xl sfBold">
          No te preocupes, tú puedes elegir a quién echar!
        </p>
      </div>

      {/* Team Section */}
      <div className="mt-16 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 p-4 bg-white rounded-xl">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <Link href="/">
              <Image
                src="/images/foto-samu.webp"
                alt="Samu"
                width={200}
                height={200}
                className="rounded-full mb-4 shadow-lg transition-opacity duration-300 hover:opacity-0"
              />
              <Image
                src="/images/samu2.png"
                alt="Samu Hover"
                width={200}
                height={200}
                className="rounded-full mb-4 shadow-lg absolute top-0 left-0 opacity-0 transition-opacity duration-300 hover:opacity-100 hover:scale-110"
              />
            </Link>
          </div>
          <h3 className="text-2xl text-black radhiumz  mb-2">Samuel</h3>
          <p className="text-center text-black    shadow-lg px-6 py-4 rounded-xl">
            El responsable de mantener todo en orden, pero a veces se le escapan
            los detalles. Promete que no volverá a pasar.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative">
            <Link href="/">
              <Image
                src="/images/ana.png"
                alt="Samu"
                width={200}
                height={200}
                className="rounded-full mb-4 shadow-lg transition-opacity duration-300 hover:opacity-0"
              />
              <Image
                src="/images/ana2.png"
                alt="Samu Hover"
                width={200}
                height={200}
                className="rounded-full mb-4 shadow-lg absolute top-0 left-0 opacity-0 transition-opacity duration-300 hover:opacity-100 hover:scale-110"
              />
            </Link>
          </div>
          <h3 className="text-2xl radhiumz mb-2 text-black">Ana</h3>
          <p className="text-center text-black shadow-lg px-6 py-4 rounded-xl">
            Nuestra experta en desarrollo, siempre innovando, pero esta vez su
            creacion se salió de control.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative">
            <Link href="/">
              <Image
                src="/images/agus.png"
                alt="Samu"
                width={200}
                height={200}
                className="rounded-full mb-4 shadow-lg transition-opacity duration-300 hover:opacity-0 "
              />
              <Image
                src="/images/agus2.png"
                alt="Samu Hover"
                width={200}
                height={200}
                className="rounded-full mb-4 shadow-lg absolute top-0 left-0 opacity-0 transition-opacity duration-300 hover:opacity-100 hover:scale-110"
              />
            </Link>
          </div>
          <h3 className="text-2xl radhiumz mb-2 text-black">Agustin</h3>
          <p className="text-center text-black  shadow-lg px-6 py-4 rounded-xl">
            La mente maestra detrás de las entidades, pero esta página se les
            escapó. ¡Promete mejores funcionalidades la próxima vez!
          </p>
        </div>

        {/* Otros miembros adicionales */}

        <div className="flex flex-col items-center">
          <div className="relative">
            <Link href="/">
              <Image
                src="/images/pili.png"
                alt="Samu"
                width={200}
                height={200}
                className="rounded-full mb-4 shadow-lg transition-opacity duration-300 hover:opacity-0"
              />
              <Image
                src="/images/pili2.png"
                alt="Samu Hover"
                width={200}
                height={200}
                className="rounded-full mb-4 shadow-lg absolute top-0 left-0 opacity-0 transition-opacity duration-300 hover:opacity-100 hover:scale-110"
              />
            </Link>
          </div>
          <h3 className="text-2xl radhiumz mb-2 text-black">Pilar</h3>
          <p className="text-center text-black shadow-lg px-6 py-4 rounded-xl">
            La que esta detrás del diseño, pero esta página se les escapó.
            ¡Promete un mejor diseño la próxima vez!
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative">
            <Link href="/">
              <Image
                src="/images/esteban.png"
                alt="Samu"
                width={200}
                height={200}
                className="rounded-full mb-4 shadow-lg transition-opacity duration-300 hover:opacity-0"
              />
              <Image
                src="/images/esteban2.png"
                alt="Samu Hover"
                width={200}
                height={200}
                className="rounded-full mb-4 shadow-lg absolute top-0 left-0 opacity-0 transition-opacity duration-300 hover:opacity-100 hover:scale-110"
              />
            </Link>
          </div>
          <h3 className="text-2xl radhiumz mb-2 text-black">Esteban</h3>
          <p className="text-center text-black shadow-lg px-6 py-4 rounded-xl ">
            La mente maestra detrás de los calculos y la logica, pero esta
            página le fundio la mente. ¡Promete un mejor fixture la próxima vez!
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative">
            <Link href="/">
              <Image
                src="/images/photoperfil.png"
                alt="Samu"
                width={200}
                height={200}
                className="rounded-full mb-4 shadow-lg transition-opacity duration-300 hover:opacity-0"
              />
              <Image
                src="/images/photoperfil2.png"
                alt="Samu Hover"
                width={200}
                height={200}
                className="rounded-full mb-4 shadow-lg absolute top-0 left-0 opacity-0 transition-opacity duration-300 hover:opacity-100 hover:scale-110"
              />
            </Link>
          </div>
          <h3 className="text-2xl radhiumz mb-2 text-black">Rosario</h3>
          <p className="text-center text-black shadow-lg px-6 py-4  rounded-xl">
            La que lleva los cafes (y el diseño). ¡Promete una mejor diseño (y
            buen cafe) la próxima vez!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
