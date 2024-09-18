import { axiosInstance } from "@/Server/AxiosConfig";

export const getOneTeam = async (teamId: string) => {
  try {
    const response = await axiosInstance.get(`/tournament-team/oneTeam/${teamId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching teams in tournament:", error);
  }
};
