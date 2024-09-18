import {
  IButtonForm,
  IDataConstructor,
} from "@/components/MainComponents/ReusableFormComponent/FormInterface";
import * as yup from "yup";

export const signInInitialValues = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  address: "",
  country: "",
  city: "",
  phone: "",
  category: "",
};

//? Validations Inpusts form
export const registerSchema = yup.object({
  name: yup
    .string()
    .min(2, "Demasiado Corto!")
    .max(40, "Demasiado Largo!")
    .defined("Requerido!"),
  lastName: yup
    .string()
    .min(2, "Demasiado Corto!")
    .max(40, "Demasiado Largo!")
    .defined("Requerido!"),
  email: yup
    .string()
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Email no valido"
    )
    .defined("Requerido!"),
  address: yup.string().defined("Requerido!"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])[A-Za-z\d!@#$%^&*]+$/,
      "Debe incluir letras Minúsculas"
    )
    .matches(
      /^(?=.*[A-Z])[A-Za-z\d!@#$%^&*]+$/,
      "Debe incluir letras mayúsculas"
    )
    .matches(/^(?=.*\d)[A-Za-z\d!@#$%^&*]+$/, "Debe Incluir minimo un numero")
    .matches(
      /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/,
      "Debe Incluir un caracter especial"
    )
    .min(8, "Demasiado Corto!")
    .max(15, "Demasiado Largo!")
    .defined("Requerido!"),
  passwordConfirm: yup
    .string()
    .equals([yup.ref("password")], "Las contraseñas no coinciden")
    .defined("Requerido!"),
  country: yup
    .string()
    .min(2, "Demasiado Corto!")
    .max(40, "Demasiado Largo!")
    .defined("Requerido!"),
  city: yup
    .string()
    .min(2, "Demasiado Corto!")
    .max(40, "Demasiado Largo!")
    .defined("Requerido!"),
  phone: yup
    .string()
    .min(9, "Demasiado Corto!")
    .max(12, "Demasiado Largo!")
    .defined("Requerido!"),
  category: yup.string().defined("Requerido!"),
});
/^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/;
//? Data constructor form
export const inputsFormValues: IDataConstructor[] = [
  {
    LabelText: "Nombre",
    FieldType: "text",
    FieldName: "name",
    FieldPH: "Nombre...",
  },
  {
    LabelText: "Apellido",
    FieldType: "text",
    FieldName: "lastName",
    FieldPH: "Apellido...",
  },
  {
    LabelText: "Email",
    FieldType: "email",
    FieldName: "email",
    FieldPH: "ejemplo@mail.com",
  },
  {
    LabelText: "Contraseña (8-15 Caracteres)",
    FieldType: "password",
    FieldName: "password",
    FieldPH: "********",
  },
  {
    LabelText: "Confirmar Contraseña",
    FieldType: "password",
    FieldName: "passwordConfirm",
    FieldPH: "********",
  },
  {
    LabelText: "País",
    FieldType: "text",
    FieldName: "country",
    FieldPH: "Argentina",
  },
  {
    LabelText: "Ciudad",
    FieldType: "text",
    FieldName: "city",
    FieldPH: "Buenos Aires",
  },
  {
    LabelText: "Telefono",
    FieldType: "number",
    FieldName: "phone",
    FieldPH: "000 000 0000",
  },
  {
    LabelText: "Direccion",
    FieldType: "address",
    FieldName: "address",
    FieldPH: "Calle 123",
  },
  {
    LabelText: "Categoría",
    FieldType: "select",
    FieldName: "category",
    FieldPH: "Categoría...",
  },
];

export const butonsRegisterForm: IButtonForm[] = [
  { name: "Crear Cuenta", type: "submit" },
];
