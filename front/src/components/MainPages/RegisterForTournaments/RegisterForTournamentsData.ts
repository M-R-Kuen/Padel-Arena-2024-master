import * as yup from "yup";
import {
  IButtonForm,
  IDataConstructor,
} from "@/components/MainComponents/ReusableFormComponent/FormInterface";
import { getAllUsers, getUsersByCategory } from "@/Server/Users/getUsers";
import { IUserLogin } from "@/interfaces/RequestInterfaces";

//? Validations Inpusts form
export const registerTournamentSchema = yup.object({
  name: yup
    .string()
    .min(2, "Demasiado Corto!")
    .max(40, "Demasiado Largo!")
    .defined("Requerido!"),
  teammate: yup.string().defined("Requerido!"),
});

export async function getDataToContructFormRegisterTournament(
  categrieId: string,
  token: string
) {
  const usersDataSelect: IUserLogin[] = await getUsersByCategory(
    categrieId,
    token
  );

  const usersToSelect = usersDataSelect.map((user: IUserLogin) => {
    return { value: user.id, name: user.name + " " + user.lastName };
  });

  const registerTournementInitialValues = {
    name: "",
    teammate: usersDataSelect[0].id,
  };

  //? Data constructor form
  const inputsRegisterTournamentFormValues: IDataConstructor[] = [
    {
      LabelText: "Nombre del ",
      FieldType: "text",
      FieldName: "name",
      FieldPH: "Los saca chispa",
    },
    {
      LabelText: "Compañero de ",
      FieldType: "select",
      FieldName: "teammate",
      selectOptions: usersToSelect,
    },
  ];
  return {
    inputsRegisterTournamentFormValues,
    registerTournementInitialValues,
  };
}
export const butonsRegisterTournamentForm: IButtonForm[] = [
  { name: "Inscribir ", type: "submit" },
];
