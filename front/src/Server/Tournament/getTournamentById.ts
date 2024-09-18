import { axiosInstance } from "../AxiosConfig";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";

// Función para simular un retraso
const simulateDelay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getTournamentById = async (
  id: string
): Promise<ITournament | null> => {
  try {
    // Simula un retraso de 3 segundos
    await simulateDelay(2000);

    const response = await axiosInstance.get(`/tournament/${id}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching tournament by ID:", error);
    return null;
  }
};

export const getTournamentByCategory = async (
  category: string
): Promise<ITournament | null> => {
  try {
    const response = await axiosInstance.get(
      `/tournament/category/${category}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching tournament by Category:", error);
    return null;
  }
};
