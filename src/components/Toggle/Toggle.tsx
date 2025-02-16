import React, { useState } from "react";

interface ToggleProps {
  label: string;
}

const Toggle: React.FC<ToggleProps> = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div style={styles.container}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        style={styles.checkbox}
      />
      <span>{label}</span>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "10px",
  },
  checkbox: {
    width: "20px",
    height: "20px",
  },
};

export default Toggle;
