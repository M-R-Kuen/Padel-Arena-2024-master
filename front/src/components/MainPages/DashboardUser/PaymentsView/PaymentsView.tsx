import React from "react";
import PaymentHistoryPanel from "../../UserPaymentsTable/UserPaymentsTable";

const PaymentsView = () => {
  return (
    <div>
      <div className="md:col-span-2 w-[95%] mx-auto">
        <PaymentHistoryPanel />
      </div>
    </div>
  );
};

export default PaymentsView;
