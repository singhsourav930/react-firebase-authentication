import React from "react";
import {
  Wrapper,
  Item,
  RadioButtonLabel,
  RadioButton,
  RadioButtonLabelOuter,
} from "./radioStyled";

export const Radio = (props) => {
  return (
    <Wrapper>
      <Item>
        <RadioButton type="radio" {...props} />
        <RadioButtonLabelOuter disabled={props?.disabled}>
          <RadioButtonLabel />
        </RadioButtonLabelOuter>
        <div>{props?.label}</div>
      </Item>
    </Wrapper>
  );
};
