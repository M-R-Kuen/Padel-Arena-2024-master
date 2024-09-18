// "use client";
// import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
// import React from "react";
// import {
//   butonsCreateTournamentForm,
//   createTournamentSchema,
// } from "./CreateTournamentData";
// import { preFormattingData } from "./PreFormattingData";
// import { ICreateTournamentFormData } from "@/interfaces/RequestInterfaces";
// import HandlerNewTournament from "@/Server/HandlerFormsFuctions/HandlerCreateTournament";
// import { IDataConstructor } from "@/components/MainComponents/ReusableFormComponent/FormInterface";
// import { IFormTournametInitiaalValues } from "./CreateTournamentFormInterfaces";
// import Swal from "sweetalert2";
// import { useRouter } from "next/navigation";

// async function handlerSubmit(
//   values: ICreateTournamentFormData,
//   router: ReturnType<typeof useRouter>
// ) {
//   try {
//     const dataFormattedToSend = preFormattingData(values);

//     if (dataFormattedToSend) {
//       const response = await HandlerNewTournament(dataFormattedToSend);
//       console.log(response);
//       Swal.fire({
//         title: "Torneo creado con éxito.",
//         width: 400,
//         padding: "3em",
//       });
//       router.push("/dashboard/admin/tournaments/management");
//     }
//   } catch (error: any) {
//     Swal.fire({
//       title:
//         "Error al crear torneo. Por favor verifica que completaste todos los campos correctamente.",
//       width: 400,
//       padding: "3em",
//     });

//     console.error(error);
//   }
// }

// interface IDataAndValuesConstructor {
//   formDataContructor: {
//     inputsCreateTournamentFormValues: IDataConstructor[];
//     createTournamentInitialValues: IFormTournametInitiaalValues;
//   };
// }

// const CreateTournamentView: React.FC<IDataAndValuesConstructor> = ({
//   formDataContructor,
// }) => {
//   const { inputsCreateTournamentFormValues, createTournamentInitialValues } =
//     formDataContructor;

//   const router = useRouter();

//   return (
//     <section className="flex flex-col items-center justify-center w-screen gap-2 h-fit">
//       <FormComponent
//         iniValues={createTournamentInitialValues}
//         valiSchema={createTournamentSchema}
//         handelerSubmit={(values: ICreateTournamentFormData) =>
//           handlerSubmit(values, router)
//         }
//         dataContructor={inputsCreateTournamentFormValues}
//         butonsForm={butonsCreateTournamentForm}
//       />
//     </section>
//   );
// };

// export default CreateTournamentView;
"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
import {
  butonsCreateTournamentForm,
  createTournamentSchema,
} from "./CreateTournamentData";
import { preFormattingData } from "./PreFormattingData";
import HandlerNewTournament from "@/Server/HandlerFormsFuctions/HandlerCreateTournament";
import { ICreateTournamentFormData } from "@/interfaces/RequestInterfaces";
import { IDataConstructor } from "@/components/MainComponents/ReusableFormComponent/FormInterface";
import { IFormTournametInitiaalValues } from "./CreateTournamentFormInterfaces";
import MapInputComponent from "./MapInputComponent";
import { AuthContext } from "@/context/GlobalContext";

const handlerSubmit = async (
  values: ICreateTournamentFormData,
  router: ReturnType<typeof useRouter>,
  plusCode: string | undefined,
  token: string
) => {
  console.log("AQUÍ ESTOY", plusCode);
  try {
    // Convierte la ubicación en un solo string
    // const locationString = `${location.lat},${location.lng}`;

    // Usa preFormattingData con la ubicación como string
    const dataFormattedToSend = preFormattingData({
      ...values,
      plusCode, // Pasa el plusCode aquí
    });
    if (!plusCode) {
      Swal.fire({
        title: "Por favor completa la ubicación del torneo.",
        width: 400,
        padding: "3em",
      });
    }

    if (dataFormattedToSend && token) {
      const response = await HandlerNewTournament(dataFormattedToSend, token);

      if (response.status === "por comenzar") {
        Swal.fire({
          title: "Torneo creado con éxito.",
          width: 400,
          padding: "3em",
        });
        router.push("/dashboard/admin/tournaments/management");
      }
    }
  } catch (error: any) {
    Swal.fire({
      title:
        "Error al crear torneo. Por favor verifica que completaste todos los campos correctamente.",
      width: 400,
      padding: "3em",
    });
    console.error(error);
  }
};

interface IDataAndValuesConstructor {
  formDataContructor: {
    inputsCreateTournamentFormValues: IDataConstructor[];
    createTournamentInitialValues: IFormTournametInitiaalValues;
  };
}

const CreateTournamentView: React.FC<IDataAndValuesConstructor> = ({
  formDataContructor,
}) => {
  const { inputsCreateTournamentFormValues, createTournamentInitialValues } =
    formDataContructor;

  const { token } = useContext(AuthContext);
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: string;
    lng: string;
  } | null>(null);

  const [selectedPlusCode, setSelectedPlusCode] = useState<string | null>(null);

  const router = useRouter();

  const handleLocationSelect = (plusCode: string) => {
    setSelectedPlusCode(plusCode);
  };

  return (
    <section className="flex flex-col items-center justify-center w-screen gap-2 h-fit">
      <div className="mt-20 flex flex-col items-center justify-start px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl md:text-4xl text-[#f8fafc] uppercase radhiumz">
          CREÁ UN TORNEO
        </h1>
        <h2 className="text-lg md:text-xl text-[#f8fafc] sfRegular">
          Completá los datos del formulario y gestioná tus propios torneos
        </h2>
      </div>
      <FormComponent
        iniValues={{
          ...createTournamentInitialValues,
          location: selectedLocation,
        }}
        valiSchema={createTournamentSchema}
        handelerSubmit={(values: ICreateTournamentFormData) =>
          handlerSubmit(values, router, selectedPlusCode!, token!)
        }
        dataContructor={inputsCreateTournamentFormValues}
        butonsForm={butonsCreateTournamentForm}
        additionalComponent={
          <div>
            <MapInputComponent onLocationSelect={handleLocationSelect} />
          </div>
        }
      />
    </section>
  );
};

export default CreateTournamentView;
