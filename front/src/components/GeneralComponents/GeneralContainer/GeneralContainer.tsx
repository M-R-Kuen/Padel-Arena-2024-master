import React from "react";

interface IGeneralContainer {
  className?: string;
  children?: React.ReactNode;
}
const GeneralContainer: React.FC<IGeneralContainer> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default GeneralContainer;
