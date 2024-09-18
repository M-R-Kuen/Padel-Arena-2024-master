import Card from "@/components/MainComponents/ReusableCard/ReusableCard";
import TournamentDetailView from "@/components/MainPages/TournamentDetailView/TournamentDetailView";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";

import React from "react";
import { getTournamentById } from "@/Server/Tournament/getTournamentById";
import { IFilerProp } from "@/components/MainPages/TournamentByUserCategory/TournamentByUserCategory";
import { CURRENT_APP_URL } from "@/Server/AxiosConfig";

//peticion get tournament/id

// export const findTournamentById = (id: string): ITournament | undefined => {
//   return tournamentsHelper.find(
//     (tournament: ITournament) => tournament.id === id
//   );
// };

//!con retraso para mostrar el loading

const TournamentDetail = async ({ params }: { params: { id: string } }) => {
  const tournamentId: ITournament | null = await getTournamentById(params.id);
  //const tournament = findTournamentById(params.id);

  if (!tournamentId) {
    return <div>Torneo no encontrado</div>;
  }
  //process.env -> obtiene las variables de entorno protegidas

  const host = process.env.CURRENT_APP_URL || " ";
  return (
    <div className=" w-[90%] md:w-3/4 mx-auto p-4 justify-center items-center ">
      <TournamentDetailView
        tournament={tournamentId}
        currentHost={host || ""}
      />
    </div>
  );
};

export default TournamentDetail;
