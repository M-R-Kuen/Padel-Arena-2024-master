import TournamentsView from "@/components/MainPages/TournamentViewComponent/TournamentView";

import React, { Suspense } from "react";

//peticion get tournaments
const Tournaments = async () => {
  return (
    <div>
      <TournamentsView />
    </div>
  );
};

export default Tournaments;
