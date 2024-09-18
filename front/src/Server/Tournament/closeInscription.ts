import { axiosInstance } from "../AxiosConfig";

export const closeInscription = async (tournamentId: string, token: string) => {
  console.log(token, "token");
  try {
    const response = await axiosInstance.put(
      `/tournament/closeInscriptions/${tournamentId}`,
      {},
      //le paso objeto vacio simulando un body sin data
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error al cerrar inscripción:", error);
    throw error;
  }
};
