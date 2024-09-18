import SpinnerLoading from "@/components/GeneralComponents/SpinnerLoading/SpinnerLoading";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col w-full h-3/4 justify-center items-center">
      <div className="flex flex-col">
        <SpinnerLoading />
        <h1 className="text-white text-3xl radhiumz uppercase">
          Esperando el saque...
        </h1>
      </div>
    </div>
  );
}
