import { axiosInstance } from "../AxiosConfig";

export const getUserStats = async (userId: string, token: string) => {
  console.log(token, "token");
  try {
    const response = await axiosInstance.get(`/player-stadistics/${userId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
