import React from "react";
import "./btncss.css";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button type="submit" className="submit-button">
      {text}
    </button>
  );
};

export default Button;
