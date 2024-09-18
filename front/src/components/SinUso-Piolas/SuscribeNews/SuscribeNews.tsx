import React from "react";
import Image from "next/image";

const SuscribeNews: React.FC = () => {
  return (
    <div className="mt-10 w-full flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <Image
            src="https://parade.com/.image/t_share/MTk1NDE2Mzk0ODc4MTY2MDM5/padel-sport.jpg"
            alt="Colorful Abstract Image"
            width={500}
            height={500}
            className="object-cover h-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
          <button className="self-end text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="text-center mt-4 md:mt-0">
            <h2 className="text-2xl radhiumz uppercase">
              ¡Sé el primero en saber qué pasa!
            </h2>
            <p className="text-gray-600 mt-2">
              Entérate de los últimos torneos, los últimos premios y mucho más.
            </p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <input
              type="email"
              placeholder="Ingresa tu email"
              className="w-full px-4 py-2 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center mt-4">
              <input
                id="terms"
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <label className="ml-2 text-sm text-gray-600">
                Estoy de acuerdo con los{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Términos y Condiciones
                </a>
              </label>
            </div>
            <button className="mt-4 bg-black text-white px-6 py-2 rounded-lg font-bold hover:bg-gray-800">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuscribeNews;
