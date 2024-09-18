"use client";
import React, { useContext, useEffect } from "react";
import MenuDropDaw from "./MenuDropDaw/MenuDropDaw";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { IMenuReusableData } from "./UserMenuReusableInterfaces";
import { usePathname, useRouter } from "next/navigation";
import { AuthContext } from "@/context/GlobalContext";

import { signOut } from "next-auth/react";
import { useUserCookies } from "@/hooks/useUserCookies";
const UserMenuReusable: React.FC<IMenuReusableData> = () => {
  const { currentUser, setCurrentUser, setToken } = useContext(AuthContext);
  const user = currentUser;

  const [menuStatus, setMenuStatus] = React.useState(false);

  const { deleteGoogleUser, deleteRegularUser, removeUserToken } =
    useUserCookies();

  const navigate = usePathname();
  const router = useRouter();

  const handlerLogOut = async () => {
    try {
      await signOut();

      deleteGoogleUser();
      deleteRegularUser();
      removeUserToken();

      setToken(null);

      setCurrentUser(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  useEffect(() => {
    setMenuStatus(false);
  }, [navigate]);

  return (
    <div className="absolute top-[10px] right-[10px] flex justify-center gap-5 sm:static h-fit sm:w-fit">
      <button
        type="button"
        className="rounded-[50%] sm:mr-[10px]"
        onClick={() => setMenuStatus(!menuStatus)}
      >
        <UserCircleIcon
          className={`w-[40px] h-auto ${
            menuStatus ? "text-lime" : "text-white"
          }`}
        />
      </button>
      <MenuDropDaw
        menuStatus={menuStatus}
        handlerLogOut={handlerLogOut}
        currentUser={user}
      />
    </div>
  );
};

export default UserMenuReusable;
