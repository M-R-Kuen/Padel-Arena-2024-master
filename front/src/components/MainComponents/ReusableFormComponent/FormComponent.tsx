"use client";
import React from "react";
import { Form, Formik } from "formik";
import { IFormikConstructor, IDataConstructor } from "./FormInterface";
import ImputForm from "./ImputForm/ImputForm";
import ButtonForm from "./ButtonForm/ButtonForm";
import TextArea from "./TextArea/TextArea";
import CheckboxContainer from "./CheckBoxContainer/CheckboxContainer";
import Select from "./SelectForm/Select";

const FormComponent: React.FC<IFormikConstructor> = ({
  iniValues,
  valiSchema,
  handelerSubmit,
  butonsForm,
  dataContructor,
  additionalComponent, // para el maps sin romper lo demás
}) => {
  const fieldsForm: IDataConstructor[] = dataContructor;

  return (
    <>
      <Formik
        initialValues={iniValues}
        validationSchema={valiSchema}
        onSubmit={handelerSubmit}
      >
        <Form className="flex flex-col items-center p-5 w-[90%] md:w-[60%] m-5 rounded-md bg-blue-950/60 border-blue-950  shadow-md shadow-lime border-2 justify-between">
          {/* Usamos grid para tener dos columnas */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 w-full">
            {fieldsForm.length > 0 &&
              fieldsForm.map((field, i) => {
                //? if else to check the type of the input
                switch (field.FieldType) {
                  case "checkboxContainer":
                    return <CheckboxContainer key={i} {...field} />;
                  case "textarea":
                    return <TextArea key={i} {...field} />;
                  case "select":
                    return (
                      <Select
                        key={i}
                        {...field}
                        selectOptions={field.selectOptions}
                      />
                    );
                  default:
                    return <ImputForm key={i} {...field} />;
                }
              })}
          </div>
          {additionalComponent && <div>{additionalComponent}</div>}

          {/* Botones del formulario */}
          <div className="flex gap-4 mt-4">
            {butonsForm.map((data, i) => {
              return <ButtonForm key={i} name={data.name} type={data.type} />;
            })}
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default FormComponent;
