import * as yup from "yup";
import {
  IButtonForm,
  IDataConstructor,
} from "@/components/MainComponents/ReusableFormComponent/FormInterface";
import { getCategories } from "@/Server/Category/getCategories";
import { ICategoryRes } from "@/interfaces/RequestInterfaces";
import { IFormTournametInitiaalValues } from "./CreateTournamentFormInterfaces";

//? Validations Inpusts form
export const createTournamentSchema = yup.object({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(40, "Too Long!")
    .defined("Required!"),
  startDate: yup.string().defined("Required!"),
  price: yup.string().defined("Required!"),
});

export async function getDataToContructFormCreateTournaments() {
  const categoriesToback: ICategoryRes[] | undefined = await getCategories();
  const categories = categoriesToback?.map((category) => {
    return {
      value: category.id,
      name: category.name,
      description: category.description,
    };
  });

  //? Data constructor form
  const inputsCreateTournamentFormValues: IDataConstructor[] = [
    {
      LabelText: "Nombre del torneo",
      FieldType: "text",
      FieldName: "name",
      FieldPH: "Padel Arena",
    },
    {
      LabelText: "Fecha de inicio",
      FieldType: "date",
      FieldName: "startDate",
      FieldPH: "01/01/2025",
    },
    {
      LabelText: "Hora de inicio",
      FieldType: "time",
      FieldName: "startTime",
      FieldPH: "00:00",
    },
    {
      LabelText: "Hora de conclusión",
      FieldType: "time",
      FieldName: "endTime",
      FieldPH: "00:00",
    },
    {
      LabelText: "Dias de juego",
      FieldType: "checkboxContainer",
      FieldName: "playingDays",
      containerCheckBox: [
        {
          LabelText: "Lunes",
          FieldName: "Lunes",
          FieldType: "checkbox",
        },
        {
          LabelText: "Martes",
          FieldName: "Martes",
          FieldType: "checkbox",
        },
        {
          LabelText: "Miércoles",
          FieldName: "Miercoles",
          FieldType: "checkbox",
        },
        {
          LabelText: "Jueves",
          FieldName: "Jueves",
          FieldType: "checkbox",
        },
        {
          LabelText: "Viernes",
          FieldName: "Viernes",
          FieldType: "checkbox",
        },
        {
          LabelText: "Sábado",
          FieldName: "Sabado",
          FieldType: "checkbox",
        },
        {
          LabelText: "Domingo",
          FieldName: "Domingo",
          FieldType: "checkbox",
        },
      ],
    },
    {
      LabelText: "Cantidad de equipos",
      FieldType: "select",
      FieldName: "teamsQuantity",
      selectOptions: [
        { name: "16", value: 16 },
        { name: "32", value: 32 },
        { name: "64", value: 64 },
      ],
    },
    {
      LabelText: "Duración media de partido en minutos",
      FieldType: "number",
      FieldName: "matchDuration",
      FieldPH: "90",
    },
    {
      LabelText: "Número de canchas disponibles para el Torneo",
      FieldType: "number",
      FieldName: "courts",
      FieldPH: "2",
    },
    {
      LabelText: "Descripción",
      FieldType: "textarea",
      FieldName: "description",
      FieldPH: "Descripción del Torneo",
    },
    {
      LabelText: "Imagen de portada del torneo",
      FieldType: "file",
      FieldName: "tournamentImg",
      FieldPH: "Categoria 01",
    },
    {
      LabelText: "Precio de inscripción por equipo",
      FieldType: "number",
      FieldName: "price",
      FieldPH: "12.000",
    },
    {
      LabelText: "Categoría del torneo",
      FieldType: "select",
      FieldName: "category",
      selectOptions: categories,
    },
  ];

  const createTournamentInitialValues: IFormTournametInitiaalValues = {
    name: "Pdel Arena",
    startDate: "2024-01-01",
    startTime: "08:00",
    endTime: "14:00",
    playingDays: [],
    teamsQuantity: 16,
    matchDuration: 90,
    courts: 4,
    description:
      "Un torneo de verano con un premio de 5000€. ¡Prepárate para la competición!",
    tournamentImg: "",
    price: 12000,
    category: categoriesToback ? categoriesToback[0].id : "",
  };

  return { inputsCreateTournamentFormValues, createTournamentInitialValues };
}

export const butonsCreateTournamentForm: IButtonForm[] = [
  { name: "Crear Torneo", type: "submit" },
];
