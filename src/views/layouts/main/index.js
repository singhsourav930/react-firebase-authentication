import React from "react";
import { Button } from "../../../theme/components";
import Header from "./header";
import Sidebar from "./sidebar";
import {
  MainComponentBox,
  ContentBox,
  ContentChildrenBox,
} from "./main.styled";

function MainLayout(props) {
  return (
    <MainComponentBox>
      <Sidebar />
      <ContentBox>
        <Header />
        {/* <Button onClick={handleLogout}>Signout</Button> */}
        <ContentChildrenBox>{props?.children}</ContentChildrenBox>
      </ContentBox>
    </MainComponentBox>
  );
}

export default MainLayout;
