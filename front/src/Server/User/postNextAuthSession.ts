import { axiosInstance } from "../AxiosConfig";
import { IUserGoogle } from "@/interfaces/RequestInterfaces";
import { isAxiosError } from "axios";
import Swal from "sweetalert2";

export const postNextAuthSession = async (user: IUserGoogle) => {
  try {
    const response = await axiosInstance.post("/auth/google-sign", user);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      Swal.fire({
        title: "Error al autenticar con Google.",
        text: error.response?.data.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
    console.log(error);
    throw error;
  }
};
