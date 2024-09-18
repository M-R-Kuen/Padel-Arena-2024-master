import { axiosInstance } from "../AxiosConfig";

export const getUserTournament = async (userId: string, token: string) => {
  try {
    const response = await axiosInstance.get(`/users/tournament/${userId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
