import { axiosInstance } from "../AxiosConfig";

export const getTournamentWinner = async (id: string) => {
  try {
    const response = await axiosInstance.get(
      `/tournament/tournamentWinner/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
