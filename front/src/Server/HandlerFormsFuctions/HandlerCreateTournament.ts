import { ICreateTournamentReq } from "@/interfaces/RequestInterfaces";
import { axiosInstance } from "../AxiosConfig";
import { isAxiosError } from "axios";
import Swal from "sweetalert2";

async function HandlerNewTournament(data: ICreateTournamentReq, token: string) {
  try {
    const response = await axiosInstance.post("/tournament/new", data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    if (
      response.status === 200 ||
      response.status === 201 ||
      response.status === 201
    ) {
      return response.data;
    } else {
      throw response.data;
    }
  } catch (error) {
    Swal.fire({
      title: `Error al crear torneo`,
      text: "Asegurate de completar correctamente todos los campos y recuerda que no puedes crear dos torneos de la misma categoría en la misma fecha.",
      width: 400,
      padding: "3em",
    });
  }
  return Error;
}

export default HandlerNewTournament;
