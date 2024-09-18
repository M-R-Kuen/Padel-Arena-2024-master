import Link from "next/link";
import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  className: string;
  href: string;
}

export const NavigateButton: React.FC<ButtonProps> = ({
  href,
  className,
  children,
}) => {
  return (
    <Link href={href}>
      <button className={className}>{children}</button>
    </Link>
  );
};
