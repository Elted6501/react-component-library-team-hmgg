import React from "react";
import "./inputcss.css";

interface InputProps {
  placeholder: string;
  type?: string;
  defaultValue?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, type, defaultValue }) => {
    return <input className="input" type={type} placeholder={placeholder} defaultValue={ defaultValue } />;
};

export default Input;