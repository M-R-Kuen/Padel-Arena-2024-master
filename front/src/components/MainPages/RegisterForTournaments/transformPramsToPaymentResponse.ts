import { IPaymentQueryResponse } from "@/interfaces/MercadoPagoInterfaces/PaymentQueryInterface";
import { ReadonlyURLSearchParams } from "next/navigation";

export function transformQueryToPaymentResponse(
  searchParams: ReadonlyURLSearchParams
): IPaymentQueryResponse {
  const queryParams = Object.fromEntries(searchParams.entries());

  const paymentParamsReturn: IPaymentQueryResponse = {
    collection_id: queryParams.collection_id || "",
    collection_status: queryParams.collection_status || "",
    external_reference: queryParams.external_reference || "",
    merchant_account_id: queryParams.merchant_account_id || "",
    merchant_order_id: queryParams.merchant_order_id || "",
    payment_id: queryParams.payment_id || "",
    payment_type: queryParams.payment_type || "",
    preference_id: queryParams.preference_id || "",
    processing_mode: queryParams.processing_mode || "",
    site_id: queryParams.site_id || "",
    status: queryParams.status || "",
  };

  return paymentParamsReturn;
}
