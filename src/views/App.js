import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "../theme";
import { useRoutes } from "react-router-dom";
import { auth, onAuthStateChanged } from "../configs/firebase";
import routes from "../routes";
import { useState } from "react";

function App(props) {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);
  const routing = useRoutes(routes(Boolean(authUser)));

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
