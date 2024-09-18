"use client";
import React, { useContext, useEffect, useState } from "react";
import TournamentSectionAll from "@/components/MainComponents/TournamentAllGallery/TournamenSectionAll";
import { getTournaments } from "@/Server/Tournament/getTournaments";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";
import { getUsersId } from "@/Server/Users/getUsers";
import { AuthContext } from "@/context/GlobalContext";
import Swal from "sweetalert2";

export interface IFilerProp {
  category: string;
}

const UserCategoryTournaments: React.FC<IFilerProp> = ({ category }) => {
  const { currentUser, token } = useContext(AuthContext);
  const [tournaments, setTournaments] = useState<ITournament[]>([]);
  const [filteredTournaments, setFilteredTournaments] = useState<ITournament[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const allTournaments: ITournament[] = await getTournaments();
        setTournaments(allTournaments);

        const userId = currentUser?.id;

        if (!userId) {
          throw new Error("No se pudo obtener el ID del usuario.");
        }
        if (!token) {
          Swal.fire({
            title: "Error",
            text: "No se pudo obtener el token de autenticación.",
            icon: "error",
            confirmButtonText: "OK",
          });
          return;
        }

        const user = await getUsersId(userId, token);

        if (!user || !user.category) {
          throw new Error("No se pudo obtener la categoría del usuario.");
        }

        const filtered = allTournaments.filter(
          (tournament) => tournament.category.name === category
        );

        setFilteredTournaments(filtered);
      } catch (err: any) {
        setError(err.message || "Ocurrió un error al obtener los datos.");
      } finally {
        setLoading(false);
      }
    };

    fetchTournaments();
  }, [currentUser, category]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen w-[90%] mx-auto mt-14">
      <h1 className="text-4xl radhiumz text-white mb-8 uppercase">
        Torneos para tu categoría <hr className="text-white h-2 w-full"></hr>
      </h1>

      {filteredTournaments.length > 0 ? (
        <>
          <div className="flex w-full mx-auto my-20 ">
            <div className="flex">
              <p className="text-white text-xl md:text-2xl sfRegular mb-10">
                Aquí puedes ver los torneos disponibles para tu categoría!
              </p>
            </div>
            <div className="flex ml-20">
              <NavigateButton
                className="bg-lime text-black sfBold px-4 rounded-lg hover:bg-black hover:text-white py-2"
                href="/tournaments">
                Vuelve a Torneos
              </NavigateButton>
            </div>
          </div>
          <TournamentSectionAll tournaments={filteredTournaments} />
        </>
      ) : (
        <div className="flex w-full mx-auto">
          <p className="text-white mr-20">
            ¡No hay torneos disponibles para tu categoría!
          </p>
          <NavigateButton
            className="bg-lime text-black sfBold px-4 rounded-lg hover:bg-black hover:text-white py-2"
            href="/tournaments">
            Vuelve a Torneos
          </NavigateButton>
        </div>
      )}
    </div>
  );
};

export default UserCategoryTournaments;
