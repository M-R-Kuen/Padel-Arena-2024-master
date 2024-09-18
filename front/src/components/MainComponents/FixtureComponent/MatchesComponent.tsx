import { AuthContext } from "@/context/GlobalContext";
import useWindowSize from "@/hooks/useWindowSize";
import { IFixture } from "@/interfaces/ComponentsInterfaces/Fixture";
import { IMatch } from "@/interfaces/ComponentsInterfaces/Match";
import { IStages } from "@/interfaces/ComponentsInterfaces/Round";
import { selectWinner } from "@/Server/Fixture/selectWinner";
import React, { useState } from "react";
import Confetti, { ReactConfetti } from "react-confetti";

interface MatchProps {
  match: IMatch;
  setFixtureState: React.Dispatch<React.SetStateAction<IFixture | null>>;
}

const MatchesComponent: React.FC<MatchProps> = ({ match, setFixtureState }) => {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const { currentUser, token } = React.useContext(AuthContext);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const { width, height } = useWindowSize();

  const handleDropdownToggle = (matchId: string) => {
    setDropdownOpen(dropdownOpen === matchId ? null : matchId);
  };

  const handleSelectWinner = async (matchId: string, teamId: string) => {
    try {
      if (!token) return;
      const response = await selectWinner(matchId, teamId, token);

      if (response) {
        setFixtureState(response);
        setDropdownOpen(null);
        // Mostrar confetti si es la final
        if (response.round.some((round: IStages) => round.stage === "final")) {
          setShowConfetti(true);

          setTimeout(() => setShowConfetti(false), 8000);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative flex justify-center items-center w-full">
      {/* Confetti */}
      {showConfetti && width > 0 && height > 0 && (
        <Confetti width={width} height={height} />
      )}
      <div className="p-2 border-2 border-white bg-blue-700/20 sfBold rounded-lg text-white shadow-md w-full md:w-44 flex flex-col items-center space-y-2 mb-6">
        <p className="text-xs text-center text-lime uppercase">{`Ganador: ${
          match.teamWinner?.name || "Por determinar"
        }`}</p>
        <p className="text-xs text-center">{`Fecha: ${match.date}`}</p>
        <p className="text-xs text-center">{`Hora: ${match.time}`}</p>

        <div className="flex flex-col space-y-1 mt-2">
          {match?.teams?.map((team) => (
            <p key={team.id} className="text-xs text-center">
              {team.name}
            </p>
          ))}
        </div>

        {/* Mostrar el botón y el dropdown solo para administradores */}
        {currentUser?.role === "admin" && !match.teamWinner && (
          <button
            onClick={() => handleDropdownToggle(match.id)}
            className="bg-lime text-black radhiumz uppercase text-xs px-4 py-2 rounded"
          >
            Seleccionar Ganador
          </button>
        )}
        {dropdownOpen === match.id && (
          <div className="absolute bg-white text-black border border-gray-300 rounded shadow-lg">
            {match.teams.map((team) => (
              <button
                key={team.id}
                onClick={() => handleSelectWinner(match.id, team.id)}
                className="block px-4 py-2 text-sm hover:bg-gray-200"
              >
                {team.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchesComponent;
