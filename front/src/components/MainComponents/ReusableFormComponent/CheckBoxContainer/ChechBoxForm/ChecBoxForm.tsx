import React from "react";
import { IDataConstructor } from "../../FormInterface";
import { Field } from "formik";

const ChecBoxForm: React.FC<IDataConstructor> = ({ LabelText, FieldType, FieldName }) => {
  return (
    <div className="flex gap-1 w-fit h-fit">
      <label className="font-bold text-customBlue">{LabelText}</label>
      <Field name={FieldName} type={FieldType}></Field>
    </div>
  );
};
export default ChecBoxForm;
