import React from "react";
import { DropdownBox, ErrorBox } from "./dropdownStyled";

import Select from "react-dropdown-select";

export const Dropdown = ({ ...props }) => {
  return (
    <DropdownBox isError={props?.isError}>
      {props?.label && <label style={{paddingLeft:'3px' , paddingRight:'10px' , fontSize:'0.8rem' }}>{props.label}</label>}
      <Select
        {...props}
        options={props?.options}
        onChange={props?.onChange ? props?.onChange : () => { }}
      />
      {props?.errorMessage && <ErrorBox>{props?.errorMessage}</ErrorBox>}
    </DropdownBox>
  );
};
