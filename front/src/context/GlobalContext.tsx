"use client";

import React, { createContext, useEffect, useState } from "react";
import { IAuthcontext } from "../interfaces/GlobalContextInterfaces";
import { IUserGooglePut, IUserLogin } from "@/interfaces/RequestInterfaces";
import { useUserCookies } from "@/hooks/useUserCookies";
import { getToken } from "next-auth/jwt";

export const AuthContext = createContext<IAuthcontext>({
  currentUser: null,
  setCurrentUser: () => {},
  userIdGoogle: null,
  setUserIdGoogle: () => {},
  updateUserPhoto: () => {},
  token: null,
  setToken: () => {},
});

const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<IUserLogin | null>(null);
  const [userIdGoogle, setUserIdGoogle] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const {
    getGoogleUser,
    getRegularUser,
    getUserToken,
    saveUserToken,
    isValidToken,
  } = useUserCookies();

  const syncUserWithCookies = async () => {
    const userGoogle = await getGoogleUser();

    if (userGoogle) {
      setCurrentUser(userGoogle);
    } else {
      const regularUser = await getRegularUser();
      if (regularUser) {
        setCurrentUser(regularUser);
      }
    }
  };

  const syncTokenCookies = async () => {
    const token = await getUserToken();
    if (token && isValidToken(token)) {
      setToken(token);
    }
  };

  useEffect(() => {
    syncUserWithCookies();
    syncTokenCookies();
  }, []);

  const updateUserPhoto = (photo: string) => {
    if (currentUser) {
      setCurrentUser({ ...currentUser, profileImg: photo });
    }
  };
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userIdGoogle,
        setUserIdGoogle,
        updateUserPhoto,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default GlobalContext;
