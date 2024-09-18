// app/tournaments/SpinnerLoading.tsx
import React from "react";

const SpinnerLoading = () => {
  return (
    <div className="flex justify-center items-center mb-20">
      <div className="w-40 h-40 border-spacing-28 border-t-8 border-t-lime border-gray-200 rounded-full animate-spin"></div>
    </div>
  );
};

export default SpinnerLoading;
