import React, { useState } from "react";
import Label from "../Label/Label";
import Input from "../Input/Input";
import Switch from "../Switch/Switch";
import Button from "../Button/Button";
import "./logincard.css";

interface LoginCardProps {
  isOn: boolean;
  toggleSwitch: () => void;
}
const LoginCard: React.FC<LoginCardProps> = (
  { isOn, toggleSwitch }: LoginCardProps
) => {
  
  return (
    <div className="card">
      <div className="form-container">
        <h2 className="title">
          Tu logo Aquí <span className="sign-in">Sign In</span>
        </h2>
        <form className="form">
          <div className="input-group">
            <div className="input-field">
              <Label text="Name" />
              <Input placeholder="Name" type="text" />
            </div>
            <div className="input-field">
              <Label text="Last Name" />
              <Input placeholder="Last Name" type="text" />
            </div>
          </div>
          <Label text="Email" />
          <Input placeholder="Email" type="email" />
          <Label text="Password" />
          <Input placeholder="Password" type="password" />
          <div className="terms">
            <Switch selected={isOn} onToggle={toggleSwitch} />
            <label htmlFor="terms" className="terms-label">
              Aceptar términos y condiciones
            </label>
          </div>
          <div className="button-container">
            <Button text="Create" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;