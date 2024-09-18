"use client";
import ActionButton from "@/components/GeneralComponents/ActionButton/ActionButton";
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import UserMenuReusable from "../UserMenuReusable/UserMenuReusable";
import { AuthContext } from "@/context/GlobalContext";
import { usePathname } from "next/navigation";

const NavBarComponent: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  const [dropDawn, setDropDown] = React.useState(false);
  const navigate = usePathname();

  function handleDropDown() {
    setDropDown(!dropDawn);
  }

  useEffect(() => {
    setDropDown(false);
  }, [navigate]);

  return (
    <nav className="relative flex flex-col sm:flex-row w-[95%] min-h-[60px] gap-2 md:gap-4 mt-8 sm:h-[60px] md:w-[95%]  bg-white/30  border-white/30 sm:justify-between items-center rounded-2xl text-white radhiumz ">
      <NavigateButton
        href="/"
        className="absolute top-0 left-0 sm:static w-fit h-fit sm:mt-[6px]"
      >
        <Image
          src="/logoApp.png"
          alt="Logo"
          className="w-auto h-[60px]"
          width={150}
          height={150}
        />
      </NavigateButton>
      {/* <hr className="w-[90%] h-[2px] border-none bg-limeBlue-gradient md:hidden" /> */}
      <ActionButton className="block mt-1 sm:hidden" onClick={handleDropDown}>
        <Bars3Icon className="h-10 font-bold" />
      </ActionButton>
      <div
        className={`flex-col min-w-fit max-w-full sm:h-[45px] lg:h-fit items-center ${
          dropDawn ? "flex" : "hidden"
        } gap-2 sm:gap-4 sm:flex-row sm:flex justify-center`}
      >
        <NavigateButton
          href="/"
          className="px-2 py-2 rounded-lg h-fit w-fit hover:mb-[2px] hover:shadow-lg "
        >
          INICIO
        </NavigateButton>
        <NavigateButton
          href="/tournaments"
          className="px-2 py-2 rounded-lg h-fit w-fit hover:mb-[2px] hover:shadow-lg"
        >
          TORNEOS
        </NavigateButton>
        {/* <NavigateButton
          href="/news"
          className="px-2 py-2 rounded-lg h-fit w-fit hover:mb-[2px] hover:shadow-lg"
        >
          NOTICIAS
        </NavigateButton> */}
      </div>
      <UserMenuReusable />
    </nav>
  );
};

export default NavBarComponent;
