import { axiosInstance } from "../AxiosConfig";

export const getAllUsers = async (token: string) => {
  try {
    const response = await axiosInstance.get("/users", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUserCategory = async (
  userId: string,
  category: string,
  token: string
) => {
  try {
    const response = await axiosInstance.put(
      `/users/updateCategory/${userId}`,
      { category },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error en la solicitud de actualización de categoría:",
      error
    );
    throw error;
  }
};

export const getUsersId = async (userId: string, token: string) => {
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

export const getUsersByCategory = async (category: string, token: string) => {
  try {
    const response = await axiosInstance.get(`/users/category/${category}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching users by category:", error);
    return null;
  }
};
