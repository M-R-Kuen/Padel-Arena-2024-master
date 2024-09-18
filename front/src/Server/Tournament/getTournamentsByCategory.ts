import { axiosInstance } from "../AxiosConfig";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";

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
