import React from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button style={styles()}>{label}</button>;
};

function styles() {
  return {
    background: "#26B7ED",
    color: "white",
    border: "2px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
  };
}

export default Button;
