"use client";
import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
import React, { useContext, useEffect, useState } from "react";
import {
  butonsRegisterTournamentForm,
  getDataToContructFormRegisterTournament,
  registerTournamentSchema,
} from "./RegisterForTournamentsData";
import { IDataConstructor } from "@/components/MainComponents/ReusableFormComponent/FormInterface";
import { AuthContext } from "@/context/GlobalContext";
import { useRouter, useSearchParams } from "next/navigation";
import SpinnerLoading from "@/components/GeneralComponents/SpinnerLoading/SpinnerLoading";
import { postCreateAndSuscribeNewTeam } from "@/Server/Tournament/Teams/postCreateAndSuscribeNewTeam";
import { IPostNewTeam } from "@/interfaces/RequestInterfaces";
import { transformQueryToPaymentResponse } from "./transformPramsToPaymentResponse";
import { IPaymentQueryResponse } from "@/interfaces/MercadoPagoInterfaces/PaymentQueryInterface";
import Swal from "sweetalert2";
import { putPaymentInscriptionStatus } from "@/Server/PaymentByMP/PaymentByMP";

interface IRegisterForTournaments {
  tournamentId: { tournamentId: string };
}

interface IDataToForm {
  inputsRegisterTournamentFormValues: IDataConstructor[];
  registerTournementInitialValues: any;
}

interface IFormValues {
  name: string;
  teammate: string;
}

const RegisterForTournaments: React.FC<IRegisterForTournaments> = ({
  tournamentId,
}) => {
  const { currentUser, token } = useContext(AuthContext);
  const [dataToForm, setDataToForm] = useState<null | IDataToForm>(null);
  const router = useRouter();
  const tournament = tournamentId.tournamentId;

  //? QUERY PARAMS
  const searchParams = useSearchParams();
  const queryParams: IPaymentQueryResponse =
    transformQueryToPaymentResponse(searchParams);

  const handlerPayment = async (values: IFormValues) => {
    try {
      if (!currentUser || !token) {
        return;
      }

      //TODO: POST DATA
      const newTeam: IPostNewTeam = {
        name: values.name,
        players: [currentUser.id, values.teammate],
      };

      const response = await postCreateAndSuscribeNewTeam(
        tournament,
        newTeam,
        token
      );

      if (response) {
        await putPaymentInscriptionStatus(queryParams.payment_id, token);
        Swal.fire({
          title: "Exito",
          text: "Se ha registrado tu equipo",
          icon: "success",
          confirmButtonText: "OK",
        });
        setTimeout(() => {
          router.push(`/tournaments/${tournament}`);
        }, 2000);
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error al registrar tu equipo",
        text: `${error}`,
        width: 400,
        padding: "3em",
      });
    }
  };

  useEffect(() => {
    if (queryParams.status === "pending") {
      Swal.fire({
        title: "Espera",
        text: "Por favor espere mientras procesamos tu pago",
        icon: "info",
        confirmButtonText: "OK",
      });
      setTimeout(() => {
        router.push("/dashboard/user/profile");
      }, 2000);
    }

    if (queryParams.status === "failed" || queryParams.status === "rejected") {
      Swal.fire({
        title: "Error",
        text: "Tu pago ha fallado",
        icon: "error",
        confirmButtonText: "OK",
      });

      setTimeout(() => {
        router.push("/dashboard/user/profile");
      }, 2000);
    }

    if (queryParams.status === "approved") {
      Swal.fire({
        title: "Exito",
        text: "Tu pago ha sido aprobado",
        icon: "success",
        confirmButtonText: "OK",
      });
    }

    async function dataConstructor() {
      try {
        if (!currentUser) {
          return;
        }
        if (!token) {
          return;
        }

        const getData = await getDataToContructFormRegisterTournament(
          currentUser.category.id,
          token
        );
        setDataToForm(getData);
      } catch (error) {
        console.error(error);
      }
    }
    dataConstructor();
  }, [currentUser]);

  return dataToForm && queryParams.status === "approved" ? (
    <section className="flex flex-col items-center justify-center w-screen gap-2 py-10 min-h-fit">
      <h1 className="text-3xl font-bold text-white">REGISTRA TU EQUIPO</h1>
      <FormComponent
        iniValues={dataToForm?.registerTournementInitialValues}
        valiSchema={registerTournamentSchema}
        handelerSubmit={handlerPayment}
        dataContructor={dataToForm?.inputsRegisterTournamentFormValues}
        butonsForm={butonsRegisterTournamentForm}
      />
    </section>
  ) : (
    <section className="flex flex-col items-center justify-center w-screen gap-2 min-h-fit">
      <SpinnerLoading />
    </section>
  );
};
export default RegisterForTournaments;
