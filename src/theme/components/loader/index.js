import React from "react";
import { LoaderBox, LoaderInnerBox } from "./loaderStyled";

export const Loader = (props) => {
  const { isLoading = false, loadingText = "Loading..." } = props;
  if (!isLoading) return null;
  return (
    <LoaderBox>
      <LoaderInnerBox>{loadingText}</LoaderInnerBox>
    </LoaderBox>
  );
};
