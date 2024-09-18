// "use client";
// import React, { useState, useContext } from "react";
// import { formatDate } from "@/helpers/dateTimeHelper";
// import { IPayment } from "@/interfaces/RequestInterfaces";
// import { getAllPaymentsAdmin } from "@/Server/PaymentByMP/PaymentByMP";
// import { AuthContext } from "@/context/GlobalContext";
// import { IAallUserPayments } from "@/interfaces/RequestInterfaces";

// // export const paymentData: IPayment[] = [
// //   {
// //     orderId: "ORD12345",
// //     status: "completed",
// //     amount: 299.99,
// //     date: "2024-08-29T10:30:00Z",
// //   },
// //   {
// //     orderId: "ORD12346",
// //     status: "failed",
// //     amount: 150.0,
// //     date: "2024-08-30T14:15:00Z",
// //   },
// //   {
// //     orderId: "ORD12347",
// //     status: "failed",
// //     amount: 75.5,
// //     date: "2024-08-31T09:00:00Z",
// //   },
// //   {
// //     orderId: "ORD12348",
// //     status: "completed",
// //     amount: 450.25,
// //     date: "2024-09-01T12:45:00Z",
// //   },
// //   {
// //     orderId: "ORD12349",
// //     status: "failed",
// //     amount: 199.99,
// //     date: "2024-09-02T16:20:00Z",
// //   },
// // ];

// const PaymentsTable: React.FC = () => {
//   const { token } = useContext(AuthContext);
//   const paymentData: IAallUserPayments[] = getAllPaymentsAdmin(token);

//   const [searchTerm, setSearchTerm] = useState<string>("");

//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleClearFilters = () => {
//     setSearchTerm("");
//   };

//   const filteredPayments = paymentData.filter((paymentData: any) => {
//     const lowercasedTerm = searchTerm.toLowerCase();
//     const matchesOrderId = paymentData.orderId
//       .toLowerCase()
//       .includes(lowercasedTerm);
//     const matchesStatus = paymentData.status
//       .toLowerCase()
//       .includes(lowercasedTerm);
//     const matchesDate = formatDate(paymentData.date).includes(lowercasedTerm);

//     return matchesOrderId || matchesStatus || matchesDate;
//   });

//   return (
//     <>
//       <div className="mt-20 flex flex-col items-center justify-start px-4 sm:px-6 md:px-8">
//         <h1 className="text-3xl md:text-4xl text-[#f8fafc] uppercase radhiumz">
//           HISTORIAL DE PAGOS
//         </h1>
//         <h2 className="text-lg md:text-xl text-[#f8fafc] sfRegular">
//           Accedé a los últimos movimientos de tu cuenta.
//         </h2>
//       </div>
//       {paymentData && paymentData.length > 0 ? (
//         <>
//           <div className="flex flex-col w-full max-w-2xl px-4 py-6 mt-10 bg-glass backdrop-filter-glass border-glass border-2 rounded-glass shadow-glass space-y-4 mx-auto">
//             <div className="w-full relative">
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleSearch}
//                 placeholder="Buscar por órden, estado o fecha..."
//                 className="w-full px-2 py-2 bg-white border-2 border-slate rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 sfRegular"
//               />
//               {searchTerm && (
//                 <button
//                   onClick={handleClearFilters}
//                   className="absolute right-3 top-2 text-gray-500 hover:text-gray-700 bg-lime rounded-xl px-1">
//                   &#10005;
//                 </button>
//               )}
//             </div>
//           </div>

//           <div className="w-[90%] md:w-4/5 mx-auto my-8 bg-[#f8fafc] rounded-3xl py-6">
//             <div className="overflow-x-auto overflow-y-auto max-h-[600px]">
//               <table className="w-full table-auto">
//                 <thead>
//                   <tr className="bg-gray-2 text-center dark:bg-meta-4">
//                     <th className="min-w-[200px] px-4 py-4 font-medium text-black radhiumz">
//                       NÚMERO DE ÓRDEN
//                     </th>
//                     <th className="min-w-[200px] px-4 py-4 font-medium text-black radhiumz">
//                       FECHA
//                     </th>
//                     <th className="min-w-[200px] px-4 py-4 font-medium text-black radhiumz">
//                       ESTADO
//                     </th>
//                     <th className="min-w-[200px] px-4 py-4 font-medium text-black radhiumz">
//                       MONTO
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredPayments.length > 0 ? (
//                     filteredPayments?.map((payment: any, key: any) => (
//                       <tr key={key} className="text-center">
//                         <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
//                           <p className="text-gray-500">{payment.orderId}</p>
//                         </td>
//                         <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
//                           <p className="text-gray-500">
//                             {formatDate(payment.date)}
//                           </p>
//                         </td>
//                         <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark relative">
//                           <p className="inline-flex items-center rounded-full text-gray-500 px-3 py-1 text-bold text-sm font-medium group relative">
//                             <svg
//                               width="24"
//                               height="24"
//                               xmlns="http://www.w3.org/2000/svg"
//                               fillRule="evenodd"
//                               clipRule="evenodd"
//                               className={`${
//                                 payment.status === "failed"
//                                   ? "text-red-500"
//                                   : payment.status === "completed"
//                                   ? "text-green-500"
//                                   : "text-yellow-500"
//                               }`}>
//                               <path
//                                 d="M12 22c-5.519 0-10-4.48-10-10 0-5.519 4.481-10 10-10 .451 0 .891.04 1.325.098-4.1.687-6.982 3.301-8.252 6.282-2.447 5.743 1.359 10.347 5.599 10.343 2.746 0 5.152-1.853 6.583-4.202 1.336-2.191 2.835-2.584 3.706-2.257.612.229.95.797.885 1.429-.807 4.712-4.905 8.307-9.846 8.307m9.874-11.509c-2.379-1.075-4.844.555-6.326 2.988-1.007 1.652-2.444 2.795-3.941 3.136-3.359.765-6.683-2.785-4.694-7.451 1.341-3.147 5.12-6.292 11.386-4.925 1.886 1.533 3.193 3.74 3.575 6.252m2.126 1.509c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12c6.68 0 12-5.459 12-12"
//                                 fill="currentColor"
//                               />
//                             </svg>
//                             <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-75 whitespace-nowrap hidden group-hover:block">
//                               {payment.status.toUpperCase()}
//                             </span>
//                           </p>
//                         </td>
//                         <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
//                           <p className="text-gray-500">{`$${payment.amount}`}</p>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td
//                         colSpan={4}
//                         className="text-center py-4 text-gray-500">
//                         No se encontraron resultados para tu búsqueda.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </>
//       ) : (
//         <div className="mt-20 my-20 flex flex-col items-center justify-start w-[90%] md:w-1/2 px-4 py-6 mx-auto bg-glass backdrop-blur-glass backdrop-filter-glass border-glass border-2 rounded-glass shadow-glass">
//           <h2 className="text-xl sfRegular m-5 text-white">
//             Aún no hay detalle de tranferencias.
//           </h2>
//         </div>
//       )}
//     </>
//   );
// };

// export default PaymentsTable;
"use client";
import React, { useState, useContext, useEffect } from "react";
import { formatDate } from "@/helpers/dateTimeHelper";
import { getAllPaymentsAdmin } from "@/Server/PaymentByMP/PaymentByMP";
import { AuthContext } from "@/context/GlobalContext";
import { IAallPayments } from "@/interfaces/RequestInterfaces";

const PaymentsTable: React.FC = () => {
  const { token } = useContext(AuthContext);
  const [paymentData, setPaymentData] = useState<IAallPayments[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        if (!token) {
          return;
        }
        const data = await getAllPaymentsAdmin(token);

        if (data) {
          setPaymentData(data);
        }
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };

    fetchPayments();
  }, [token]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
  };

  const filteredPayments = paymentData.filter((payment) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const matchesOrderId = payment.payment_id
      .toLowerCase()
      .includes(lowercasedTerm);
    const matchesStatus = payment.status.toLowerCase().includes(lowercasedTerm);
    const matchesDate = formatDate(payment.date_approved).includes(
      lowercasedTerm
    );

    return matchesOrderId || matchesStatus || matchesDate;
  });

  return (
    <>
      <div className="mt-20 flex flex-col items-center justify-start px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl md:text-4xl text-[#f8fafc] uppercase radhiumz">
          HISTORIAL DE PAGOS
        </h1>
        <h2 className="text-lg md:text-xl text-[#f8fafc] sfRegular">
          Accedé a los últimos movimientos de tu cuenta.
        </h2>
      </div>
      {paymentData && paymentData.length > 0 ? (
        <>
          <div className="flex flex-col w-full max-w-2xl px-4 py-6 mt-10 bg-glass backdrop-filter-glass border-glass border-2 rounded-glass shadow-glass space-y-4 mx-auto">
            <div className="w-full relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Buscar por órden, estado o fecha..."
                className="w-full px-2 py-2 bg-white border-2 border-slate rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 sfRegular"
              />
              {searchTerm && (
                <button
                  onClick={handleClearFilters}
                  className="absolute right-3 top-2 text-gray-500 hover:text-gray-700 bg-lime rounded-xl px-1"
                >
                  &#10005;
                </button>
              )}
            </div>
          </div>

          <div className="w-[90%] md:w-4/5 mx-auto my-8 bg-[#f8fafc] rounded-3xl py-6">
            <div className="overflow-x-auto overflow-y-auto max-h-[600px]">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-2 text-center dark:bg-meta-4">
                    <th className="min-w-[200px] px-4 py-4 font-medium text-black radhiumz">
                      NÚMERO DE ÓRDEN
                    </th>
                    <th className="min-w-[200px] px-4 py-4 font-medium text-black radhiumz">
                      USUARIO
                    </th>
                    <th className="min-w-[200px] px-4 py-4 font-medium text-black radhiumz">
                      FECHA
                    </th>
                    <th className="min-w-[200px] px-4 py-4 font-medium text-black radhiumz">
                      ESTADO
                    </th>
                    <th className="min-w-[200px] px-4 py-4 font-medium text-black radhiumz">
                      MONTO
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPayments.length > 0 ? (
                    filteredPayments.map((payment, key) => (
                      <tr key={key} className="text-center">
                        <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                          <p className="text-gray-500">{payment.payment_id}</p>
                        </td>
                        <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                          <p className="text-gray-500">{payment.user.name}</p>
                        </td>
                        <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                          <p className="text-gray-500">
                            {formatDate(payment.date_approved)}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark relative">
                          <p className="inline-flex items-center rounded-full text-gray-500 px-3 py-1 text-bold text-sm font-medium group relative">
                            <svg
                              width="24"
                              height="24"
                              xmlns="http://www.w3.org/2000/svg"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              className={`${
                                payment.status === "rejected"
                                  ? "text-red-500"
                                  : payment.status === "approved"
                                  ? "text-green-500"
                                  : "text-yellow-500"
                              }`}
                            >
                              <path
                                d="M12 22c-5.519 0-10-4.48-10-10 0-5.519 4.481-10 10-10 .451 0 .891.04 1.325.098-4.1.687-6.982 3.301-8.252 6.282-2.447 5.743 1.359 10.347 5.599 10.343 2.746 0 5.152-1.853 6.583-4.202 1.336-2.191 2.835-2.584 3.706-2.257.612.229.95.797.885 1.429-.807 4.712-4.905 8.307-9.846 8.307m9.874-11.509c-2.379-1.075-4.844.555-6.326 2.988-1.007 1.652-2.444 2.795-3.941 3.136-3.359.765-6.683-2.785-4.694-7.451 1.341-3.147 5.12-6.292 11.386-4.925 1.886 1.533 3.193 3.74 3.575 6.252m2.126 1.509c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12c6.68 0 12-5.459 12-12"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-75 whitespace-nowrap hidden group-hover:block">
                              {payment.status === "approved"
                                ? "APROBADO"
                                : payment.status === "rejected"
                                ? "RECHAZADO"
                                : "PENDIENTE"}
                            </span>
                          </p>
                        </td>
                        <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                          <p className="text-gray-500">{`$${payment.transaction_amount}`}</p>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={4}
                        className="text-center py-4 text-gray-500"
                      >
                        No se encontraron resultados para tu búsqueda.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div className="mt-20 my-20 flex flex-col items-center justify-start w-[90%] md:w-1/2 px-4 py-6 mx-auto bg-glass backdrop-blur-glass backdrop-filter-glass border-glass border-2 rounded-glass shadow-glass">
          <h2 className="text-xl sfRegular m-5 text-white">
            Aún no hay detalle de tranferencias.
          </h2>
        </div>
      )}
    </>
  );
};

export default PaymentsTable;
