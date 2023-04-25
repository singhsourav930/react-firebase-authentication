import React from "react";
import { LoaderBox, LoaderInnerBox } from "./loaderStyled";
export const TableLoader = (props) => {
  const { isLoading = false, loadingText = "Loading..." } = props;
  if (!isLoading) return null;
  return (
    <LoaderBox >
      <div class="card">
        <div class="header">
          <div class="details">
            <span class="about"></span>
            <span class="name"></span>
          </div>
        </div>
        <div class="description">
          <div class="line line-1"></div>
        </div>
        <div class="header">
          <div class="details">
            <span class="about"></span>
            <span class="about"></span>
            <span class="about"></span>
            <span class="about"></span>
            <span class="about"></span>
            <span class="about"></span>
          </div>
        </div>
        {/* <div class="btns">
          <div class="btn btn-2"></div>
        </div> */}
        <div class="description"> 
          <div class="line line-2"></div>
        </div>
      </div>
    </LoaderBox>
  );
};
