import { ICategories } from "@/interfaces/ComponentsInterfaces/TournamentCategorias";
import { ICategoryRes } from "@/interfaces/RequestInterfaces";

export interface IFormikConstructor {
  iniValues: Object;
  valiSchema: Object;
  handelerSubmit: any;
  butonsForm: IButtonForm[];
  dataContructor: IDataConstructor[];
  additionalComponent?: React.ReactNode; // para el maps sin romper lo demás
}

//? Form Components Interface
enum SectionType {
  text = "input",
  textarea = "textarea",
  checkboxContainer = "checkboxContainer",
}

enum FieldType {
  text = "input",
  textarea = "textarea",
  checkboxContainer = "checkboxContainer",
}

export interface IDataConstructor {
  LabelText: string;
  FieldType: "textarea" | "checkboxContainer" | "select" | string;
  FieldName: string;
  FieldPH?: string;
  containerCheckBox?: IDataConstructor[];
  selectOptions?: {
    value: string | number;
    name: string;
    description?: string;
  }[];
}

export interface IButtonForm {
  name: string;
  type: "submit" | "reset" | "button" | undefined;
}
