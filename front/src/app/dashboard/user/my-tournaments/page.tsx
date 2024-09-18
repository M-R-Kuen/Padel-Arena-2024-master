import TournamentSectionAll from "@/components/MainComponents/TournamentAllGallery/TournamenSectionAll";
import PersonalizedTournamentView from "@/components/MainPages/DashboardUser/PersonalizedTournamentView/PersonalizedTournamentView";
import StadisticsSectionView from "@/components/MainPages/DashboardUser/StadisticsSection/StadisticsSectionView";
import StadisticsView from "@/components/MainPages/DashboardUser/StadisticsSection/StadisticsView";
import UserTournaments from "@/components/MainPages/DashboardUser/UserTournaments/UserTournaments";

import React from "react";

const Stadistics = () => {
  return (
    <div className="flex flex-col w-full">
      <UserTournaments />

      <div className="bg-blue-700/30">
        <PersonalizedTournamentView />
        <StadisticsSectionView />
      </div>
    </div>
  );
};

export default Stadistics;
