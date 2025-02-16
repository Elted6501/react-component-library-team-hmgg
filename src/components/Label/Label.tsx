import React from "react";
import "./labelcss.css";

interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
  return <label>{text}</label>;
};

export default Label;