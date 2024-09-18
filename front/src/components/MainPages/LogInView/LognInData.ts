import * as yup from "yup";
import {
  IButtonForm,
  IDataConstructor,
} from "@/components/MainComponents/ReusableFormComponent/FormInterface";

export const logInInitialValues = {
  email: "",
  password: "",
};

//? Validations Inpusts form
export const logInSchema = yup.object({
  email: yup
    .string()
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "Email no valido")
    .defined("Requerido!"),
  password: yup
    .string()
    .min(8, "Demasiado Corto!")
    .max(40, "Demasiado Largo!")
    .defined("Requerido!"),
});

//? Data constructor form
export const inputsLogIngFormValues: IDataConstructor[] = [
  {
    LabelText: "Email del Usuario",
    FieldType: "email",
    FieldName: "email",
    FieldPH: "ejemplo@mail.com",
  },
  {
    LabelText: "Contraseña",
    FieldType: "password",
    FieldName: "password",
    FieldPH: "********",
  },
];

export const butonsLogInForm: IButtonForm[] = [{ name: "Ingresar", type: "submit" }];
