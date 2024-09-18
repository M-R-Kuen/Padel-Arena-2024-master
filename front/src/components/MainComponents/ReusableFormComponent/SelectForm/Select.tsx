import { ErrorMessage, Field } from "formik";
import React from "react";
import { IDataConstructor } from "../FormInterface";

const Select: React.FC<IDataConstructor> = ({
  LabelText,
  FieldName,
  selectOptions = [],
}) => {
  return (
    <div className="flex flex-col h-[100px] w-full gap-1">
      <label className="text-lg text-slate">{LabelText}</label>
      <Field name={FieldName} as="select" className="p-1 text-gray-800 rounded">
        {selectOptions.length > 0 &&
          selectOptions.map((option, i) => (
            <option
              key={i}
              value={option.value}
              className="p-1 text-gray-800 rounded"
            >
              {option.name} - {option.description}{" "}
              {/* Muestra la descripción aquí */}
            </option>
          ))}
      </Field>
      <span className="font-bold text-red-600">
        <ErrorMessage name={FieldName} />
      </span>
    </div>
  );
};

export default Select;
