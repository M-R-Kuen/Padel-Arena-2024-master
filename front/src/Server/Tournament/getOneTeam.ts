import { axiosInstance } from "../AxiosConfig";

export const getTeamsInTournament = async (teamId: string) => {
  try {
    const response = await axiosInstance.get(
      `/tournament-team/oneTeam/${teamId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching teams in tournament:", error);
  }
};
