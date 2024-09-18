import {
  IAallPayments,
  IAallUserPayments,
  IProductPaymentDataReq,
} from "@/interfaces/RequestInterfaces";
import { axiosInstance } from "../AxiosConfig";

export async function postPaymentToMP(productData: IProductPaymentDataReq, token: string) {
  try {
    const redirectUrl = await axiosInstance.post("/mercado-pago/create_preference", productData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    if (redirectUrl.status === 201) {
      return redirectUrl.data;
    } else {
      throw new Error("Error al realizar el pago");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getAllPayments(userID: string, token: string) {
  try {
    const response = await axiosInstance.get(`/mercado-pago/byUser/${userID}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data: IAallUserPayments[] = response.data;
    if (!data) {
      throw new Error("No hay pagos");
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllPaymentsAdmin(token: string) {
  try {
    const response = await axiosInstance.get(`/mercado-pago/allPayments`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data: IAallPayments[] | undefined = response.data;
    if (!data) {
      throw new Error("No hay pagos");
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function putPaymentInscriptionStatus(id: string, token: string) {
  console.log("la Funcion: ", id, token);
  try {
    const response = await axiosInstance.put(
      `/mercado-pago/inscriptionStatus/${id}`,
      {},
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
