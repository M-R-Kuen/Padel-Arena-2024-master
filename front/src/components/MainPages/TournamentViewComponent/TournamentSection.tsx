import React from "react";
import Carousel from "@/components/MainComponents/ReusableCarouselComponent/ReusableCarousel";
import ActionButton from "@/components/GeneralComponents/ActionButton/ActionButton";
import { PlusIcon } from "@heroicons/react/24/solid";

import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import { formatDate } from "@/helpers/dateTimeHelper";

interface TournamentSectionProps {
  title: string;
  tournaments: ITournament[];
  onActionClick: () => void;
}

const TournamentSection: React.FC<TournamentSectionProps> = ({
  title,
  tournaments,
  onActionClick,
}) => {
  const getImageUrl = (src: string) => {
    const defaultImage = "/images/default-image.jpg";
    const isValidUrl =
      src.startsWith("http://") ||
      src.startsWith("https://") ||
      src.startsWith("/");
    return isValidUrl ? src : defaultImage;
  };

  const mapTournamentsToCarousel = (tournaments: ITournament[]) =>
    tournaments?.map((tournament: ITournament) => ({
      src: getImageUrl(
        tournament.tournamentFlyer ?? "/images/default-image.jpg"
      ),
      alt: `${tournament.name} - ${tournament.description}`,
      title: tournament.name,
      categoria: tournament.category.name || "Sin categoría",
      precio: tournament.price?.toString() || "Sin precio",
      fechaInicio: formatDate(tournament.startDate),
      fechaFin: formatDate(tournament.endDate),
      href: `/tournaments/${tournament.id}`,
      inscription: tournament.inscription,
    }));

  const carouselItems = mapTournamentsToCarousel(tournaments);

  return (
    <div className="w-[80%] mx-auto mt-10 md:mt-32">
      <div className="flex flex-row items-center justify-between w-[90%] md:w-[60%] mb-4">
        <h2 className="text-2xl md:text-4xl radhiumz mb-4">{title}</h2>
        <ActionButton
          className="flex items-center justify-center w-10 h-10 bg-lime text-black rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={onActionClick}
        >
          <PlusIcon className="h-6 w-6" />
        </ActionButton>
      </div>
      {carouselItems.length === 0 ? (
        <p className="sfRegular text-xl text-black bg-blue-600/20 rounded-lg px-4 py-2">
          ¡No hay torneos disponibles!
        </p>
      ) : (
        <Carousel images={carouselItems} />
      )}
    </div>
  );
};

export default TournamentSection;
