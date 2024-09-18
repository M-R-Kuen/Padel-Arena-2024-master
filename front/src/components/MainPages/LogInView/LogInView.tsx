//! CON EL USEAUTH HOOK
"use client";
import React from "react";
import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
import {
  butonsLogInForm,
  inputsLogIngFormValues,
  logInInitialValues,
  logInSchema,
} from "./LognInData";
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";
import ButtonNextAuthSignIn from "@/components/MainComponents/NextAuthButtonSignIn/NextAuthButtonSignIn";
import ReusableModal from "@/components/GeneralComponents/Modal/ReusableModal";
import useTournamentData from "@/hooks/fetchTournamentData";
import useAuth from "@/hooks/authLogin";
import {
  buttonsUpdateProfileForm,
  updateProfileInitialValues,
  updateProfileSchema,
} from "./updateData";
import { IDataConstructor } from "@/components/MainComponents/ReusableFormComponent/FormInterface";

const LogInView: React.FC = () => {
  const {
    isModalOpen,
    formData,
    handleCloseModal,
    handleUpdateProfile,
    handleInputChange,
    logIn,
  } = useAuth();
  const { categories, error } = useTournamentData();

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
      selectOptions: categories
        ? categories.map((category) => ({
            value: category.id,
            name: category.name,
            description: category.description,
          }))
        : [],
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-screen gap-2 min-h-fit mt-20">
      <h1 className="text-white text-2xl text-center sfRegular ">
        Iniciá sesión, es hora de
        <br />
        <span className="radhiumz text-6xl text-lime uppercase "> JUGAR</span>
      </h1>
      <FormComponent
        iniValues={logInInitialValues}
        valiSchema={logInSchema}
        handelerSubmit={logIn}
        butonsForm={butonsLogInForm}
        dataContructor={inputsLogIngFormValues}
      />
      <ButtonNextAuthSignIn className="rounded-md bg-black text-white">
        Iniciar sesión con Google
      </ButtonNextAuthSignIn>
      {/* Navigate Button to create an account */}
      <div className="flex items-center gap-8 my-20">
        <span className="text-white text-xl sfRegular">
          No estas registrado?
        </span>
        <NavigateButton
          href="/register"
          className="rounded-lg bg-customBlue w-full h-fit py-4 px-4 sfRegular text-xl text-white hover:shadow-lg"
        >
          Registrate
        </NavigateButton>
      </div>
      {/* Modal para completar perfil */}
      <ReusableModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        blurBackground={true}
        backgroundColor="bg-transparent"
        textColor="text-black"
        className="p-4"
        bgImageUrl="https://example.com/your-background-image.jpg"
      >
        <h2 className="text-xl text-white font-bold mb-4">
          Completa tu perfil
        </h2>
        <FormComponent
          iniValues={updateProfileInitialValues}
          valiSchema={updateProfileSchema}
          handelerSubmit={handleUpdateProfile}
          butonsForm={buttonsUpdateProfileForm}
          dataContructor={updateProfileFields}
        />
        {/* Campos para completar el perfil
        <form onSubmit={handleUpdateProfile}>
          
          <div className="mb-4">
            <label className="block mb-2">Teléfono</label>
            <input
              type="text"
              name="phone"s
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Teléfono"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">País</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="País"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Ciudad</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Ciudad"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Dirección</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Dirección"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Categoría</label>
            <select
              name="category"
              value={
                categories.find((category) => category.id === formData.category)
                  ?.name || ""
              }
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Selecciona una categoría</option>
              {error && <option>Error al cargar categorías</option>}
              {categories &&
                categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Actualizar Perfil
          </button>
        </form>
        */}
      </ReusableModal>
    </section>
  );
};

export default LogInView;
