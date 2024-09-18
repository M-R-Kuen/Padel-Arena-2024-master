import { AuthContext } from "@/context/GlobalContext";
import { IFixture } from "@/interfaces/ComponentsInterfaces/Fixture";
import { IMatch } from "@/interfaces/ComponentsInterfaces/Match";
import { getFixtureById } from "@/Server/Fixture/getFixtureById";
import { selectWinner } from "@/Server/Fixture/selectWinner";
import React, { useContext, useEffect, useState } from "react";

interface FixtureProps {
  fixtureId: string;
}

const FixtureComponent: React.FC<FixtureProps> = ({ fixtureId }) => {
  const [fixture, setFixture] = useState<IFixture | null>(null);
  const rounds = fixture?.round || [];
  const { currentUser } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  useEffect(() => {
    const getFixture = async () => {
      try {
        const response: IFixture = await getFixtureById(fixtureId);

        setFixture(response);
      } catch (error) {
        console.log(error);
      }
    };

    getFixture();
  }, [fixtureId]);

  const handleDropdownToggle = (matchId: string) => {
    setDropdownOpen(dropdownOpen === matchId ? null : matchId);
  };

  const handleSelectWinner = async (matchId: string, teamId: string) => {
    try {
      console.log("aca va el handle select winner con el token");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative">
        {rounds.length > 0 ? (
          rounds.map((round, roundIndex) => (
            <div
              key={roundIndex}
              className="flex flex-col items-center relative"
            >
              <h3 className="text-2xl uppercase text-white mb-4">
                {`Round ${roundIndex + 1}`}
              </h3>
              <div className="flex flex-col items-center space-y-8 relative">
                {round.matches?.length > 0 ? (
                  round.matches.map((match, matchIndex) => (
                    <div
                      key={match.id}
                      className="p-4 border-2 border-white bg-blue-700/20 rounded-lg text-white shadow-md w-40 flex flex-col items-center space-y-2 relative"
                    >
                      <p className="text-lg font-medium">{`Partido ${match.id}`}</p>
                      <p className="text-sm">{`Fecha: ${match.date}`}</p>
                      <p className="text-sm">{`Hora: ${match.time}`}</p>
                      {currentUser?.role === "admin" &&
                        match.teamWinner === null && (
                          <div className="relative mt-4 ">
                            <button
                              onClick={() => handleDropdownToggle(match.id)}
                              className="bg-lime text-black uppercase text-xs px-4 py-2 rounded"
                            >
                              Seleccionar Ganador
                            </button>

                            {dropdownOpen === match.id && (
                              <div className="absolute w-full mt-2 bg-white text-black border border-gray-300 rounded shadow-lg">
                                {match.teams.map((team) => (
                                  <button
                                    key={team.id}
                                    onClick={() =>
                                      handleSelectWinner(match.id, team.id)
                                    }
                                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                                  >
                                    {team.name}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      {/* Horizontal Line Connector */}
                      {roundIndex < rounds.length - 1 && (
                        <div className="absolute bg-white z-50 w-20 h-0.5 left-full top-1/2 transform translate-x-2"></div>
                      )}

                      {/* Vertical Line Connector */}
                      {matchIndex % 2 === 0 &&
                        roundIndex < rounds.length - 1 && (
                          <div className="absolute bg-white z-50 w-0.5 h-48 left-full top-1/2 transform translate-x-2 -translate-y-4"></div>
                        )}
                    </div>
                  ))
                ) : (
                  <p className="text-white">No matches available</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No rounds available</p>
        )}
      </div>
    </div>
  );
};

export default FixtureComponent;
