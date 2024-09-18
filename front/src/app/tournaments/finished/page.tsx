import React from "react";

import TournamentSectionAll from "@/components/MainComponents/TournamentAllGallery/TournamenSectionAll";
import { getTournaments } from "@/Server/Tournament/getTournaments";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";

const FinishedTournamentsPage = async () => {
  const tournaments: ITournament[] = await getTournaments();

  const filteredTournaments = tournaments.filter(
    (tournament) => tournament.status === "finalizado"
  );

  return (
    <div className="min-h-screen w-[90%] mx-auto mt-14">
      <h1 className="text-4xl radhiumz text-white mb-8 uppercase">
        Torneos Finalizados <hr className="text-white h-2 w-full"></hr>
      </h1>

      {filteredTournaments.length > 0 ? (
        <>
          <div className="flex w-full mx-auto my-20 ">
            <div className="flex">
              <p className="text-white text-xl md:text-2xl sfRegular mb-10">
                Aqui puedes ver los torneos ya finalizados!
              </p>
            </div>
            <div className="flex ml-20">
              <NavigateButton
                className="bg-lime text-black sfBold px-4 rounded-lg hover:bg-black hover:text-white
            py-2"
                href="/tournaments">
                Vuelve a Torneos
              </NavigateButton>
            </div>
          </div>
          <TournamentSectionAll tournaments={filteredTournaments} />
        </>
      ) : (
        <div className="flex w-full mx-auto">
          <p className="text-white mr-20">¡No hay torneos disponibles!</p>
          <NavigateButton
            className="bg-lime text-black sfBold px-4 rounded-lg hover:bg-black hover:text-white
          py-2"
            href="/tournaments">
            Vuelve a Torneos
          </NavigateButton>
        </div>
      )}
    </div>
  );
};

export default FinishedTournamentsPage;
