import React from "react";
import "./switchcss.css";

export interface ISwitchProps {
  selected: boolean;               // Estado actual del switch (ON/OFF)
  state?: "enabled" | "hovered" | "focused" | "pressed" | "disabled"; // Estado de interacción
  icon?: boolean;                  // Si debe mostrar un icono
  className?: string;              // Clases CSS adicionales
  onToggle: () => void;            // Función para alternar el estado
  disabled?: boolean;              // Si el switch debe estar deshabilitado
}

export const Switch = ({
  selected,
  className,
  onToggle,
  disabled,
}: ISwitchProps) => {
  // Determina si el switch está en el estado "checked" (ON)
  const switchClass = selected ? "checked" : "";
  const disabledClass = disabled ? "disabled" : ""; // Clase para el estado deshabilitado

  // Al hacer clic, si no está deshabilitado, se alterna el estado
  const handleClick = () => {
    if (!disabled) {
      onToggle(); // Llama la función para cambiar el estado
    }
  };

  return (
    <div
      className={`switch ${className} ${switchClass} ${disabledClass}`}
      onClick={handleClick}
      aria-checked={selected}
      role="switch"
    >
      <div className="handle">
        <div className="target">
          <div className="state-layer">
            <div className="handle-shape">
              <div className="container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switch;
