"use client";
import React, { useContext, useEffect } from "react";
import UserInfoPanel from "../../../MainComponents/UserInfoPanel/UserInfoPanel";
import { AuthContext } from "@/context/GlobalContext";

const ProfileSection: React.FC = () => {
  const { currentUser, token } = useContext(AuthContext);

  const user = currentUser;

  return (
    <div className="w-3/4 mx-auto">
      {user ? <UserInfoPanel user={user} /> : <p>No se encontró un usuario.</p>}
    </div>
  );
};

export default ProfileSection;
