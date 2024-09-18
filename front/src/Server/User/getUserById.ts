import { axiosInstance } from "../AxiosConfig";

export const getUserById = async (userId: string, token: string) => {
  try {
    const response = await axiosInstance.get(`/users/${userId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
