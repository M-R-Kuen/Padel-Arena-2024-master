import { axiosInstance } from "../AxiosConfig";

export const makeMeAdmin = async (userId: string, secretKey: string) => {
  try {
    const response = await axiosInstance.put(`/users/makeMeAdmin/${userId}`, {
      secretKey,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
