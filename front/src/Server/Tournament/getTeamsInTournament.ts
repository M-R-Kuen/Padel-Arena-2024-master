import { axiosInstance } from "../AxiosConfig";

export const getTeamsInTournament = async (tournamentId: string) => {
  try {
    const response = await axiosInstance.get(
      `/tournament-team/${tournamentId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching teams in tournament:", error);
  }
};
