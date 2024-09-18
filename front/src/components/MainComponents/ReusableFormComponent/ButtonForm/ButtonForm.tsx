import React from "react";
import { IButtonForm } from "../FormInterface";

const ButtonForm: React.FC<IButtonForm> = ({ name, type }) => {
  return (
    <div className="flex flex-col h-fit w-[240px]">
      <button
        className="rounded-md w-full h-fit py-[5px] px-[10px] bg-lime text-black hover:shadow-lg hover:shadow-blue-700 radhiumz uppercase"
        type={type}
      >
        {name}
      </button>
    </div>
  );
};

export default ButtonForm;
