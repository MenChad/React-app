import React from "react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
