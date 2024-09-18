"use client";

import React, { useContext } from "react";
import StadisticsView from "./StadisticsView";
import { AuthContext } from "@/context/GlobalContext";

const StadisticsSectionView = () => {
  const { currentUser, token } = useContext(AuthContext);
  const userId = currentUser?.id ?? "";

  return (
    <div>
      {currentUser && token ? (
        <StadisticsView userId={userId} token={token} />
      ) : (
        "Necesitas iniciar sesión para ver tus estadísticas."
      )}
    </div>
  );
};

export default StadisticsSectionView;
