import React from "react";

interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
  return <label style={styles()}>{text}</label>;
};

function styles() {
  return {
    fontSize: "16px",
    color: "#333",
    fontWeight: "bold",
  };
}

export default Label;