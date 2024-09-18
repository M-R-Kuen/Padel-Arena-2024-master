import React, { useState, useEffect, useContext } from "react";
import { IFixture } from "@/interfaces/ComponentsInterfaces/Fixture";
import { getFixtureById } from "@/Server/Fixture/getFixtureById";
import { AuthContext } from "@/context/GlobalContext";
import RoundComponent from "./RoundComponent";
import Confetti from "react-confetti/dist/types/Confetti";
import useWindowSize from "@/hooks/useWindowSize";
import { IStages } from "@/interfaces/ComponentsInterfaces/Round";
import ReactConfetti from "react-confetti";

interface FixtureProps {
  fixtureId: string;
}

const NewFixtureComponent: React.FC<FixtureProps> = ({ fixtureId }) => {
  const { width, height } = useWindowSize();
  const [fixture, setFixture] = useState<IFixture | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getFixture = async () => {
      try {
        const response: IFixture = await getFixtureById(fixtureId);
        setFixture(response);
        // Mostrar confetti si es la final
        if (response.round.some((round: IStages) => round.stage === "final")) {
          setShowConfetti(true);

          setTimeout(() => setShowConfetti(false), 8000);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getFixture();
  }, []);

  // Placeholder para los stages si no hay fixture data
  const rounds = ["Octavos", "Cuartos", "Semifinal", "Final"];

  if (!fixture) return <div>No se encontró el fixture.</div>;

  return (
    <div>
      {/* Confetti */}
      {showConfetti && width > 0 && height > 0 && (
        <ReactConfetti width={width} height={height} />
      )}
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="flex flex-col items-center">
          <h1 className="text-md md:text-xl radhiumz text-white">OCTAVOS</h1>
          <p className="sfRegular text-md md:text-xl text-white uppercase">
            Arranca el fixture!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-md md:text-xl radhiumz text-white">CUARTOS</h1>
          <p className="sfRegular text-md md:text-xl text-white uppercase">
            Precalentamiento!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-md md:text-xl radhiumz text-white">
            SEMIFINALES
          </h1>
          <p className="sfRegular text-md md:text-xl text-white uppercase">
            Empieza la pelea
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-md md:text-xl radhiumz text-white">FINALES</h1>
          <p className="sfRegular text-md md:text-xl text-white uppercase">
            El gran final!
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row  w-full h-fit items-center space-y-8">
        {" "}
        {/* Cambiar a flex-col para una columna */}
        {rounds.map((round, i) => (
          <div
            key={i}
            className="w-full flex justify-center border-white border-r-2"
          >
            {" "}
            {/* Contenedor para cada RoundComponent */}
            <RoundComponent
              stage={fixture.round[i] ? fixture.round[i] : rounds.length - i}
              setFixtureState={setFixture}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewFixtureComponent;
