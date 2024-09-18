import { axiosInstance } from "../AxiosConfig";
import Swal from "sweetalert2";

export const updatePhoto = async (id: string, photo: File, token: string) => {
  try {
    const formData = new FormData();
    formData.append("file", photo);

    const response = await axiosInstance.put(
      `/file/update-tournamentFlyer/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          accept: "*/*",
          authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error al subir la foto",
      text: "Por favor prueba con una más pequeña.",
      width: 400,
      padding: "3em",
    });
    console.error("Error al actualizar la foto:", error);
    throw error;
  }
};
