export interface IPaymentQueryResponse {
  collection_id: string;
  collection_status: string;
  external_reference: string;
  merchant_account_id: string;
  merchant_order_id: string;
  payment_id: string;
  payment_type: string;
  preference_id: string;
  processing_mode: string;
  site_id: string;
  status: string;
}
