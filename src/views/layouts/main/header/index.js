import React from "react";
import { Button } from "../../../../theme/components";
import { HeaderBox } from "./header.styled";
import { auth, signOut } from "../../../../configs/firebase";

function Header(props) {
  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <HeaderBox>
      <h3>
        <Button small primary onClick={handleLogout}>
          Logout
        </Button>
      </h3>
    </HeaderBox>
  );
}

export default Header;
