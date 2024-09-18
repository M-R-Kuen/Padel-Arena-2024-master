import { axiosInstance } from "../AxiosConfig";

export const updatePhotoUserProfile = async (
  id: string,
  photo: File,
  token: string
) => {
  try {
    const formData = new FormData();
    formData.append("file", photo);

    const response = await axiosInstance.put(
      `/file/update-userProfileImage/${id}`,
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
    console.error("Error al actualizar la foto:", error);
    throw error;
  }
};
