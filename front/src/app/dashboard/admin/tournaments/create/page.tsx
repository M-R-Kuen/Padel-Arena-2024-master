import { getDataToContructFormCreateTournaments } from "@/components/MainPages/CreateTournamentView/CreateTournamentData";
import CreateTournamentView from "@/components/MainPages/CreateTournamentView/CreateTournamentView";
import React from "react";

const page: React.FC = async () => {
  return (
    <CreateTournamentView formDataContructor={await getDataToContructFormCreateTournaments()} />
  );
};

export default page;
