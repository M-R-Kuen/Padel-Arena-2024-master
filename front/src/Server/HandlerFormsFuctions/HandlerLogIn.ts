import { IUserLoginReq } from "@/interfaces/RequestInterfaces";
import { axiosInstance } from "../AxiosConfig";
import Swal from "sweetalert2";
import { AxiosError } from "axios";

async function HandlerLogIn(data: IUserLoginReq) {
  try {
    const response = await axiosInstance.post("/auth/local-signin", data);

    if (response.status === 200) {
      return response.data;
    } else {
      throw response.data;
    }
  } catch (error) {
    console.error(error);
    console.log(error);

    Swal.fire({
      title: "Error al iniciar sesión",
      text: `Usuario o contraseña incorrectos`,
      width: 400,
      padding: "3em",
    });

    return error;
  }
}

export default HandlerLogIn;
