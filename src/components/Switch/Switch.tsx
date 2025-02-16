import React, { JSX } from 'react';
import "./switchcss.css";

export interface ISwitchProps {
  selected?: "false" | "true";
  state?: "enabled" | "hovered" | "focused" | "pressed" | "disabled";
  icon?: "false" | "true";
  className?: string;
}

export const Switch = ({
  selected = "true",
  state = "enabled",
  icon = "false",
  className,
  ...props
}: ISwitchProps): JSX.Element => {
  const variantsClassName =
    "selected-" + selected + " state-" + state + " icon-" + icon;

  return (
    <div className={"switch " + className + " " + variantsClassName}>
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