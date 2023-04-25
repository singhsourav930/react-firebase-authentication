import React from "react";
import { SwitchBoxWrapper, SwitchBox, SwitchBoxLabel } from "./switchStyled";

export const Switch = ({ className, checked = false, ...props }) => {
  return (
    <SwitchBoxWrapper>
      <SwitchBox
        id="checkbox"
        type="checkbox"
        checked={checked}
        {...props}
        small={props?.small}
        onChange={props?.onChange ? props?.onChange : () => {}}
      />
      <SwitchBoxLabel
        htmlFor="checkbox"
        checked={checked}
        primary={props?.primary}
        secondary={props?.secondary}
        disabled={props?.disabled}
        small={props?.small}
      />
    </SwitchBoxWrapper>
  );
};
