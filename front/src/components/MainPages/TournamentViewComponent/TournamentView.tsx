"use client";

import React, { useEffect, useState } from "react";
import TournamentSection from "./TournamentSection";
import Header from "./TournamentHeader";
import { useRouter } from "next/navigation";
import useTournamentData from "@/hooks/fetchTournamentData";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import TournamentFilters, {
  Filters,
} from "@/components/MainComponents/TournamentsFilters/TournamentsFilters";

const TournamentsView: React.FC = () => {
  const { tournaments, categories } = useTournamentData();
  const router = useRouter();

  // Inicializa el estado filtrado con todos los torneos
  const [filteredTournaments, setFilteredTournaments] =
    useState<ITournament[]>(tournaments);

  const applyFilters = (filters: Filters) => {
    if (tournaments.length === 0) {
      setFilteredTournaments([]);
      return;
    }

    const filtered = tournaments.filter((tournament) => {
      const tournamentMonth = new Date(tournament.startDate).getMonth() + 1;
      const tournamentMonthFormatted =
        tournamentMonth < 10 ? `0${tournamentMonth}` : `${tournamentMonth}`;

      const matchesCategory =
        !filters.category || tournament.category?.name === filters.category;
      const matchesMonth =
        !filters.month || tournamentMonthFormatted === filters.month;
      const matchesInscriptionStatus =
        !filters.inscription || tournament.inscription === filters.inscription;

      return matchesCategory && matchesMonth && matchesInscriptionStatus;
    });

    setFilteredTournaments(filtered);
  };

  const resetFilters = () => {
    setFilteredTournaments(tournaments);
  };

  const handlePlusClick = (status: string) => {
    router.push(`/tournaments/${status}`);
  };

  const filterTournaments = (status: string) => {
    if (filteredTournaments.length === 0) {
      return [];
    }

    const normalizedStatus = status.trim().toLowerCase();

    return filteredTournaments.filter((tournament) => {
      const tournamentStatus = tournament?.status?.trim().toLowerCase();
      return tournamentStatus === normalizedStatus;
    });
  };

  useEffect(() => {
    applyFilters({
      category: "",
      month: "",
      inscription: "",
    });
  }, [tournaments]);

  return (
    <div className="min-h-screen">
      <Header />

      <TournamentFilters
        categories={categories}
        onApplyFilters={applyFilters}
        onResetFilters={resetFilters}
      />

      <section className="bg-white py-2 md:py-6 my-14 min-h-screen w-[90%] mx-auto rounded-3xl">
        {categories.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            <p>¡No hay categorías disponibles en este momento!</p>
          </div>
        )}

        {filteredTournaments.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            <p>No hay torneos disponibles en este momento.</p>
          </div>
        ) : (
          <>
            <TournamentSection
              title="Torneos por Comenzar"
              tournaments={filterTournaments("por comenzar")}
              onActionClick={() => handlePlusClick("upcoming")}
            />
            <TournamentSection
              title="Torneos en Progreso"
              tournaments={filterTournaments("en progreso")}
              onActionClick={() => handlePlusClick("progress")}
            />
            <TournamentSection
              title="Torneos Finalizados"
              tournaments={filterTournaments("finalizado")}
              onActionClick={() => handlePlusClick("finished")}
            />
          </>
        )}
      </section>
    </div>
  );
};

export default TournamentsView;
