"use client";

import React, { useEffect, useState } from "react";
import MatchStatsChart from "../../../MainComponents/MatchChart/MatchChart";
import TournamentLineChart from "../../../MainComponents/TournamentChart/TournamentChart";
import useUserStats from "@/hooks/useStatsData";
import { getUserById } from "@/Server/User/getUserById";

interface StadisticsViewProps {
  userId: string;
  token: string;
}

const StadisticsView = ({ userId, token }: StadisticsViewProps) => {
  const { stats, loading, error } = useUserStats(userId, token);
  const [userName, setUserName] = useState<string>("");

  const wonTournamentsData: number[] = stats?.wonTournaments
    ? [stats.wonTournaments]
    : Array(12).fill(0);

  const lossTournamentsData: number[] = stats?.lossTournaments
    ? [stats.lossTournaments]
    : Array(12).fill(0);
  useEffect(() => {
    const getUserName = async () => {
      const response = await getUserById(userId, token);

      if (response) {
        setUserName(response.name);
      }
    };

    getUserName();
  });

  if (loading)
    return <p className="text-white text-center">Cargando estadísticas...</p>;
  if (error) return <p className="text-white text-center">{error}</p>;
  if (!stats)
    return (
      <p className="text-white text-center radhiumz text-2xl mb-10">
        No se encontraron estadísticas.
      </p>
    );

  return (
    <div className="flex flex-col justify-center w-full my-6 px-4">
      <h1 className="text-3xl text-center text-white radhiumz uppercase mb-8">
        {` Una mirada a tu rendimiento ${userName}`}
      </h1>
      <hr className="text-white h-2 w-3/4 mx-auto mb-10"></hr>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 mb-8 md:mb-0">
          <MatchStatsChart won={stats?.won} loss={stats?.loss} />
        </div>
        <div className="flex-1">
          <TournamentLineChart
            gano={wonTournamentsData}
            perdio={lossTournamentsData}
          />
        </div>
      </div>
    </div>
  );
};

export default StadisticsView;
