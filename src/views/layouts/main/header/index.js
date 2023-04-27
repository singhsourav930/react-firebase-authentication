import React, { useEffect } from "react";
import { Button } from "../../../../theme/components";
import { HeaderBox } from "./header.styled";
import { auth, signOut } from "../../../../configs/firebase";

function Header(props) {
  const userData = props?.userData;
  let userName = userData?._tokenResponse?.email || userData?.email || "";
  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <HeaderBox>
      <div className="d-flex justify-content-end w-100">
        <div className="pe-3">
          <h3>{userName}</h3>
        </div>
        <Button small primary onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </HeaderBox>
  );
}

export default Header;
