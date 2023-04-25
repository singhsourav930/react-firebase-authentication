import React from "react";
import { InputBox, ErrorBox, InputLabel } from "./inputStyled";

export const Input = ({ ...props }) => {
  return (
    <div>
      {props?.label && <InputLabel>{props?.label}</InputLabel>}
      <InputBox {...props} />
      {props?.errorMessage && <ErrorBox>{props?.errorMessage}</ErrorBox>}
    </div>
  );
};
