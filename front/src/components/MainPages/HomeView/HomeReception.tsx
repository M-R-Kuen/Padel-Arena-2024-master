import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";
import React from "react";
import Card from "@/components/GeneralComponents/CristalCard/CristalCard";

const HomeReception: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-start w-full min-h-auto">
        <div className="flex flex-col items-start justify-start p-4 m-4 mt-16 md:p-8 md:m-8">
          <div className="leading-none text-white tittles radhiumz">
            <h1 className="text-[40px] sm:text-[60px]">TORNEOS</h1>
            <h1 className="text-[28px] sm:text-[40px]">en un solo</h1>
            <h1 className="text-[57px] sm:text-[86px] text-lime">LUGAR</h1>
          </div>
          <div className="mt-8 text-white text-[20px] sfRegular">
            <p>
              Todos tus torneos organizados de la mejor manera.
              <br />
              Padel simplificado como nunca viste.
            </p>
          </div>
          <NavigateButton
            href="/tournaments"
            className="mt-10 p-8 rounded-md bg-[#BEF164] min-w-[150px] px-4 py-2 text-black radhiumz hover:translate-y-[-2px] hover:shadow-lg">
            VER TORNEOS
          </NavigateButton>
        </div>
      </div>
      <div className="p-4 sm:p-8 sm:ml-8 flex flex-col lg:flex-row justify-start items-start gap-4 sm:w-[80%]">
        <Card
          href="/"
          className=" hover:translate-y-[-2px] hover:shadow-lg w-[345px] sm:w-[370px] h-[160px] hover:bg-lime/80 rounded-lg overflow-hidden flex items-center">
          <div className="flex items-center gap-4">
            <img
              src="https://cdn-blog.superprof.com/blog_es/wp-content/uploads/2022/12/ganadores.jpg.webp"
              alt="participantes"
              className="object-cover w-[60%] sm:w-[200px] h-auto rounded-lg"
            />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl sm:text-4xl radhiumz">+</h1>
              <h1 className="text-2xl sm:text-4xl radhiumz">200</h1>
              <p className="sfRegular">PARTICIPANTES</p>
            </div>
          </div>
        </Card>

        <Card
          href="/"
          className=" hover:translate-y-[-2px] hover:shadow-lg w-[345px] sm:w-[370px] h-[160px] hover:bg-lime/80 rounded-lg overflow-hidden flex items-center">
          <div className="flex items-center gap-4">
            <img
              src="https://padelmagazine.fr/wp-content/uploads/2022/03/Victoire-Reus-Open-WPT-2022-Salazar-Triay.jpg"
              alt="torneos"
              className="object-cover w-[60%] sm:w-[200px] h-auto rounded-lg"
            />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl sm:text-4xl radhiumz">+</h1>
              <h1 className="text-2xl sm:text-4xl radhiumz">34</h1>
              <p className="sfRegular">TORNEOS</p>
            </div>
          </div>
        </Card>

        <Card
          href="/"
          className=" hover:translate-y-[-2px] hover:shadow-lg w-[345px] sm:w-[370px] h-[160px] hover:bg-lime/80 rounded-lg overflow-hidden flex items-center">
          <div className="flex items-center gap-4">
            <img
              src="https://www.padeladdict.com/wp-content/uploads/2022/08/reparto-premios-pruebas-world-padel-tour-foto-interior.jpg"
              alt="premios"
              className="object-cover w-[60%] sm:w-[200px] h-auto rounded-lg"
            />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl sm:text-4xl radhiumz">+</h1>
              <h1 className="text-2xl sm:text-4xl radhiumz">1000</h1>
              <p className="sfRegular">PREMIOS</p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default HomeReception;
