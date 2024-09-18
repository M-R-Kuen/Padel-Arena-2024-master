"use client";

import { useState, useEffect } from "react";
import { getTournaments } from "@/Server/Tournament/getTournaments";
import { getCategories } from "@/Server/Category/getCategories";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import { ICategories } from "@/interfaces/ComponentsInterfaces/TournamentCategorias";

const useTournamentData = () => {
  const [tournaments, setTournaments] = useState<ITournament[]>([]);
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Llama a las funciones de obtención de datos y espera sus respuestas
        const tournamentsData = await getTournaments();
        const categoriesData = await getCategories();

        // Verifica si los datos son válidos
        if (!Array.isArray(tournamentsData) || !Array.isArray(categoriesData)) {
          throw new Error("Datos no válidos recibidos del servidor");
        }

        // Establece los datos en el estado
        setTournaments(tournamentsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        setError(
          "Error al obtener los datos. Por favor, intenta de nuevo más tarde."
        );
      }
    };

    fetchData();
  }, []);

  return { tournaments, categories, error };
};

export default useTournamentData;
