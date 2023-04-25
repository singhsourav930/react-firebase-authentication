import React from "react";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  CheckboxLabel,
} from "./checkboxStyled";

export const Checkbox = ({ className, checked, ...props }) => {
  return (
    <CheckboxContainer className={className}>
      <label>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox
          primary={props?.primary}
          secondary={props?.secondary}
          checked={checked}
          disabled={props?.disabled}
        >
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
        {props?.label && <CheckboxLabel>{props?.label}</CheckboxLabel>}
      </label>
    </CheckboxContainer>
  );
};
