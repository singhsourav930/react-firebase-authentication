import React from "react";
import { Button, Card } from "../button";
import { ContentHeaderBox } from "./contentHeaderStyled";

export const ContentHeader = (props) => {
  const {
    title = "",
    btnText = "",
    btnAction = () => {},
    subTitle = "",
  } = props || {};
  return (
    <ContentHeaderBox>
      <div>
        {title && <h3>{title}</h3>}
        {subTitle && <h6>{subTitle}</h6>}
      </div>
      {btnText && (
        <Button outline small onClick={btnAction} transparent>
          {btnText}
        </Button>
      )}
    </ContentHeaderBox>
  );
};
