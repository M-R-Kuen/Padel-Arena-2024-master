"use client";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "@/context/GlobalContext";
import CustomTable from "@/components/GeneralComponents/CustomTable/CustomTable";
import { useRouter } from "next/navigation";
import ActionButton from "@/components/GeneralComponents/ActionButton/ActionButton";
import { getAllPayments } from "@/Server/PaymentByMP/PaymentByMP";
import { IAallUserPayments } from "@/interfaces/RequestInterfaces";
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";

const PaymentHistoryPanel: React.FC = () => {
  const { currentUser, token } = useContext(AuthContext);
  const [paymentsList, setPaymentsList] = React.useState<
    IAallUserPayments[] | null
  >(null);
  const router = useRouter();

  const handleCompleteRegistration = (
    tournamentId: string,
    paymenID: string
  ) => {
    router.push(
      `/tournaments/register/${tournamentId}?status=approved&payment_id=${paymenID}`
    );
  };

  const headers = ["ID", "Estado", "Fecha", "Monto", "Nombre", "Acciones"];

  async function getPayments() {
    if (!currentUser || !token) return;
    try {
      const payments = await getAllPayments(currentUser?.id, token);

      if (payments) setPaymentsList(payments);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPayments();
  }, [currentUser]);

  return (
    <>
      <div className="flex flex-col items-center justify-start mt-20">
        <h1 className="mx-4 text-3xl text-center text-white uppercase radhiumz md:mx-0 md:text-4xl">
          HISTORIAL DE PAGOS
          <hr className="w-full h-2 text-white" />
        </h1>
        <h2 className="mt-8 text-white sfRegular text-md md:text-xl">
          <span className="m-2 uppercase radhiumz text-x">
            {currentUser?.name}
          </span>{" "}
          Lleva el registro de tus cuentas
        </h2>
        <NavigateButton
          href="/tournaments"
          className="mt-4 bg-lime text-black px-4 py-2 rounded-lg sfBold hover:bg-black hover:text-white"
        >
          Vuelve a torneos
        </NavigateButton>
      </div>

      <div className="p-8 bg-blue-700/30 shadow-md shadow-lime py-2 md:py-6 my-14 w-[90%] mx-auto rounded-3xl">
        {/* Versión de escritorio */}
        <div className="hidden md:block">
          <CustomTable headers={headers}>
            {paymentsList?.map((payment) => (
              <tr key={payment.message.id} className="border-t-2 border-lime">
                <td className="px-4 py-2">{payment.message.payment_id}</td>
                <td
                  className={`px-4 py-2 ${
                    payment.message.status === "approved"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {payment.message.status}
                </td>
                <td className="px-4 py-2">{payment.message.date_created}</td>
                <td className="px-4 py-2">
                  ${payment.message.transaction_amount.toFixed(2)}
                </td>
                <td className="px-4 py-2">{payment.message.tournament.name}</td>
                <td className="px-4 py-2">
                  {!payment.message.successInscription && (
                    <ActionButton
                      onClick={() =>
                        handleCompleteRegistration(
                          payment.message.tournament.id,
                          payment.message.payment_id
                        )
                      }
                      className="px-2 py-1 text-sm text-black uppercase rounded bg-lime radhiumz hover:bg-blue-700 hover:text-white"
                    >
                      Completar Inscripción
                    </ActionButton>
                  )}
                </td>
              </tr>
            ))}
          </CustomTable>
        </div>

        {/* Versión móvil */}
        <div className="block md:hidden">
          <CustomTable headers={["ID", "Estado", "Nombre", "Acciones"]}>
            {paymentsList?.map((payment) => (
              <tr key={payment.message.id} className="border-t-2 border-lime">
                <td className="px-4 py-2">{payment.message.payment_id}</td>
                <td
                  className={`px-4 py-2 ${
                    payment.message.status === "approved"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {payment.message.status}
                </td>
                <td className="px-4 py-2">{payment.message.tournament.name}</td>
                <td className="px-4 py-2">
                  {!payment.message.successInscription && (
                    <ActionButton
                      onClick={() =>
                        handleCompleteRegistration(
                          payment.message.tournament.id,
                          payment.message.payment_id
                        )
                      }
                      className="px-2 py-1 text-sm text-black uppercase rounded bg-lime radhiumz hover:bg-blue-700 hover:text-white"
                    >
                      Completar Inscripción
                    </ActionButton>
                  )}
                </td>
              </tr>
            ))}
          </CustomTable>
        </div>
      </div>
    </>
  );
};

export default PaymentHistoryPanel;
