import { ErrorMessage, Field } from "formik";
import React from "react";
import { IDataConstructor } from "../FormInterface";

const ImputForm: React.FC<IDataConstructor> = ({
  LabelText,
  FieldType,
  FieldName,
  FieldPH,
}) => {
  return (
    <div className="flex flex-col  w-full gap-1">
      <label className="text-lg sfRegular text-white">{LabelText}</label>

      <Field
        type={FieldType}
        name={FieldName}
        placeholder={FieldPH}
        className={`font-Medium ${
          FieldType === "file" ? "text-lime" : "p-1 text-black rounded"
        }`}></Field>
      <span className="font-Medium text-red-600 bg-slate/70 rounded">
        <ErrorMessage name={FieldName} />
      </span>
    </div>
  );
};

export default ImputForm;
