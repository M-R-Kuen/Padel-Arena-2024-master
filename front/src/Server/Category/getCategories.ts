import { axiosInstance } from "../AxiosConfig";
export const getCategories = async () => {
  try {
    const response = await axiosInstance.get("/category");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
