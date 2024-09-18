"use client";

import TournamentSectionAll from "@/components/MainComponents/TournamentAllGallery/TournamenSectionAll";
import { AuthContext } from "@/context/GlobalContext";
import useTournamentData from "@/hooks/fetchTournamentData";
import React, { useContext } from "react";

const PersonalizedTournamentView = () => {
  const { tournaments } = useTournamentData();

  const { currentUser, token } = useContext(AuthContext);

  const userCategory = currentUser?.category?.name;

  const filteredTournaments = tournaments?.filter(
    (tournament) =>
      tournament.category?.name === userCategory &&
      tournament.inscription === "abiertas"
  );

  return (
    <div className="flex flex-col justify-center items-center mt-6  p-10">
      {filteredTournaments && filteredTournaments.length > 0 ? (
        <>
          <h1 className="text-4xl radhiumz text-lime uppercase">
            ¡Aún puedes inscribirte a estos torneos!
          </h1>
          <p className="text-white sfBold text-2xl">
            Especialmente seleccionados de acuerdo a tu categoría, no te los
            pierdas
          </p>

          <TournamentSectionAll tournaments={filteredTournaments} />
        </>
      ) : (
        <div className="flex flex-col justify-center items-center w-[90%] mx-auto">
          <h1 className="text-3xl radhiumz text-lime uppercase">
            Estate atento a los proximos torneos de tu categoria!
          </h1>
        </div>
      )}
    </div>
  );
};

export default PersonalizedTournamentView;
