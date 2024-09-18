"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
import {
  butonsRegisterForm,
  inputsFormValues,
  registerSchema,
  signInInitialValues,
} from "./RegisterData";
import HandlerRegister from "@/Server/HandlerFormsFuctions/HandlerRegister";
import { IUserRegisterReq } from "@/interfaces/RequestInterfaces";
import ButtonNextAuthSignIn from "@/components/MainComponents/NextAuthButtonSignIn/NextAuthButtonSignIn";
import useTournamentData from "@/hooks/fetchTournamentData";
import useAuth from "@/hooks/authLogin"; // Importa el hook useAuth
import ReusableModal from "@/components/GeneralComponents/Modal/ReusableModal"; // Importa el modal reutilizable
import {
  buttonsUpdateProfileForm,
  updateProfileInitialValues,
  updateProfileSchema,
} from "../LogInView/updateData";
import { IDataConstructor } from "@/components/MainComponents/ReusableFormComponent/FormInterface";
import { AuthContext } from "@/context/GlobalContext";

const RegisterView = () => {
  const {
    isModalOpen,
    formData,
    handleCloseModal,
    handleUpdateProfile,
    handleInputChange,
    logIn,
  } = useAuth(); // Usa el hook para la lógica de autenticación
  const navigate = useRouter();
  const { categories, error } = useTournamentData();

  // Verifica que categories exista y no esté vacío
  const categoryOptions =
    categories && categories.length > 0
      ? categories.map((category) => ({
          value: category.id,
          name: category.name,
          description: category.description,
        }))
      : [];

  const updateProfileFields: IDataConstructor[] = [
    {
      LabelText: "Teléfono",
      FieldName: "phone",
      FieldType: "input",
      FieldPH: "Teléfono",
    },
    {
      LabelText: "País",
      FieldName: "country",
      FieldType: "input",
      FieldPH: "País",
    },
    {
      LabelText: "Ciudad",
      FieldName: "city",
      FieldType: "input",
      FieldPH: "Ciudad",
    },
    {
      LabelText: "Dirección",
      FieldName: "address",
      FieldType: "input",
      FieldPH: "Dirección",
    },
    {
      LabelText: "Categoría",
      FieldName: "category",
      FieldType: "select",
      selectOptions: categoryOptions, // Usa categoryOptions después de la verificación
    },
  ];

  async function RegisterHandeler(data: IUserRegisterReq) {
    const transformedData = {
      ...data,
      phone: String(data.phone),
    };

    try {
      const response = await HandlerRegister(transformedData);

      Swal.fire({
        title: "Registro exitoso",
        text: "Tu cuenta ha sido creada. Ahora puedes iniciar sesión.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      navigate.push("/login");
    } catch (error) {
      Swal.fire({
        title: "Error al registrarse",
        text: "Hubo un problema al crear tu cuenta. Por favor, intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  }

  const updatedInputsFormValues = inputsFormValues.map((input) => {
    if (input.FieldType === "select" && input.FieldName === "category") {
      return {
        ...input,
        selectOptions: categoryOptions, // Usa categoryOptions después de la verificación
      };
    }
    return input;
  });

  return (
    <section className="flex flex-col items-center justify-center w-screen gap-2 h-fit my-20">
      <h1 className="text-white text-2xl sfRegular text-center">
        Registrate para ser parte de
        <br />
        <span className="radhiumz text-6xl text-lime uppercase">
          {" "}
          la accion
        </span>
      </h1>
      <FormComponent
        iniValues={signInInitialValues}
        valiSchema={registerSchema}
        handelerSubmit={RegisterHandeler}
        dataContructor={updatedInputsFormValues}
        butonsForm={butonsRegisterForm}
      />
      {/* Botón para registrarse con Google */}

      <ButtonNextAuthSignIn className=" bg-black text-white">
        Registrate con Google
      </ButtonNextAuthSignIn>

      {/* Modal para completar perfil si se registra con Google */}
      <ReusableModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        blurBackground={true}
        backgroundColor="bg-white"
        textColor="text-black"
        className="p-4"
      >
        <h2 className="text-xl font-bold mb-4">Completa tu perfil</h2>
        <FormComponent
          iniValues={updateProfileInitialValues}
          valiSchema={updateProfileSchema}
          handelerSubmit={handleUpdateProfile}
          butonsForm={buttonsUpdateProfileForm}
          dataContructor={updateProfileFields}
        />
      </ReusableModal>
    </section>
  );
};

export default RegisterView;
