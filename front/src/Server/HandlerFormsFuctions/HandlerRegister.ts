import { IUserRegisterReq } from "@/interfaces/RequestInterfaces";
import { axiosInstance } from "../AxiosConfig";

async function HandlerRegister(data: IUserRegisterReq) {
  try {
    const response = await axiosInstance.post("/auth/local-signup", data);

    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export default HandlerRegister;
