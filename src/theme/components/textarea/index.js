import React from "react";
import { TextAreaBox, ErrorBox, TextAreaLabel } from "./textareaStyled";

export const TextArea = ({ ...props }) => {
  return (
    <div>
      {props?.label && <TextAreaLabel>{props?.label}</TextAreaLabel>}
      <TextAreaBox {...props} />
      {props?.errorMessage && <ErrorBox>{props?.errorMessage}</ErrorBox>}
    </div>
  );
};
