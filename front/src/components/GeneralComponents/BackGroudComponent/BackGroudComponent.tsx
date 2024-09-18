import React from "react";

const BackGroudComponent: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 -z-10 bg-image"></div>
      <div className="absolute inset-0 bg-black -z-10 opacity-40"></div>
    </div>
  );
};

export default BackGroudComponent;
