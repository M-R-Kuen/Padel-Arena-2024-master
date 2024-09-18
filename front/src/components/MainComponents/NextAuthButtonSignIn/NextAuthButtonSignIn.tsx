// components/ButtonNextAuthSignIn.tsx
"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

export interface ButtonNextAuthProps {
  children: React.ReactNode;
  className?: string; // Hacer que la clase sea opcional
}

const ButtonNextAuthSignIn: React.FC<ButtonNextAuthProps> = ({
  className = "", // Valor por defecto vacío si no se proporciona clase
  children,
}) => {
  const signInGoogle = () => {
    // Inicia sesión con Google
    signIn("google", {
      prompt: "login",
    });
  };

  return (
    <button
      onClick={signInGoogle}
      className={`flex items-center justify-center px-2 rounded-xl bg-white/20 shadow-md shadow-lime  text-black hover:shadow-blue-700 ${className}`}
    >
      <div className="flex items-center text-center">
        <Image
          src="/images/google.svg"
          alt="Google Logo"
          width={70}
          height={70}
        />
        <p className="text-white text-xl  sfRegular">Inicia Sesion</p>
      </div>
    </button>
  );
};

export default ButtonNextAuthSignIn;
