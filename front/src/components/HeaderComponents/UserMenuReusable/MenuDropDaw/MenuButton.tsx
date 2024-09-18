import React from "react";

import Link from "next/link";
import { IButtonUserMenu } from "../UserMenuReusableInterfaces";

const MenuButton: React.FC<IButtonUserMenu> = ({
  children,
  text,
  routeNavigate,
  onClick,
}) => {
  function handlerClick() {
    console.log("click button");

    if (onClick) {
      onClick();
    }
  }

  const rout = routeNavigate;
  return (
    <Link href={rout ?? "/"}>
      <button
        className="flex items-center w-full gap-2 p-2 m-1 text-black bg-gray-300 rounded-lg hover:bg-customBlue hover:text-white"
        onClick={handlerClick}
      >
        {children}
        <span>{text}</span>
      </button>
    </Link>
  );
};

export default MenuButton;
