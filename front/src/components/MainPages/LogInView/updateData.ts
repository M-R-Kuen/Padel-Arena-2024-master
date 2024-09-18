import * as yup from "yup";
import { IButtonForm } from "@/components/MainComponents/ReusableFormComponent/FormInterface";

export const updateProfileInitialValues = {
  phone: "",
  country: "",
  city: "",
  address: "",
  category: "",
};

export const updateProfileSchema = yup.object({
  phone: yup
    .string()
    .matches(
      /^\+?\d{10,15}$/,
      "Teléfono no válido, debe tener entre 10 y 15 dígitos."
    )
    .required("Teléfono es requerido!"),
  country: yup
    .string()
    .min(2, "Nombre del país demasiado corto!")
    .max(50, "Nombre del país demasiado largo!")
    .required("País es requerido!"),
  city: yup
    .string()
    .min(2, "Nombre de la ciudad demasiado corto!")
    .max(50, "Nombre de la ciudad demasiado largo!")
    .required("Ciudad es requerida!"),
  address: yup
    .string()
    .min(5, "Dirección demasiado corta!")
    .max(100, "Dirección demasiado larga!")
    .required("Dirección es requerida!"),
  category: yup.string().required("Categoría es requerida!"),
});

export const buttonsUpdateProfileForm: IButtonForm[] = [
  { name: "Actualizar Perfil", type: "submit" },
];
