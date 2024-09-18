"use client";
import React from "react";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import TournamentCard from "../TournamentCard/TournamentCard";

interface TournamentGalleryProps {
  tournaments: ITournament[];
}

const TournamentGallery: React.FC<TournamentGalleryProps> = ({
  tournaments,
}) => {
  const getImageUrl = (src: string) => {
    const defaultImage = "/images/default-image.jpg";
    const isValidUrl =
      src.startsWith("http://") ||
      src.startsWith("https://") ||
      src.startsWith("/");
    return isValidUrl ? src : defaultImage;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4  ">
      {tournaments.map((tournament) => (
        <TournamentCard
          key={tournament.id}
          src={getImageUrl(tournament.tournamentFlyer ?? "")}
          alt={tournament.name}
          title={tournament.name}
          genero={tournament.genero || ""}
          categoria={tournament.category.name || "Sin categoría"}
          inscripciones={tournament.inscription}
          precio={tournament.price?.toString() || "Sin precio"}
          fechaInicio={new Date(tournament.startDate).toLocaleDateString(
            "es-ES"
          )}
          fechaFin={new Date(tournament.endDate).toLocaleDateString("es-ES")}
          href={`/tournaments/${tournament.id}`}
        />
      ))}
    </div>
  );
};

export default TournamentGallery;
