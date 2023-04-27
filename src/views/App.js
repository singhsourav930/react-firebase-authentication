import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "../theme";
import { useRoutes } from "react-router-dom";
import { auth, onAuthStateChanged } from "../configs/firebase";
import routes from "../routes";
import { LStorage } from "../helpers";

function App(props) {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
        LStorage.removeUserData();
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userData = LStorage.getUserData() || authUser;
  const routing = useRoutes(
    routes({ isLoggedIn: Boolean(userData), userData })
  );

  return (
    <div>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        {routing}
      </ThemeProvider>
    </div>
  );
}

export default App;
