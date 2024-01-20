import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./core/theme";
import Router from "./core/router/components/Router";
import HomePage from "./pages/HomePage";
import HelpPage from "./pages/HelpPage";

import "./styles/index.css";
import PasswordContextProvider from "./contexts/PasswordContext/Provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PasswordContextProvider>
        <Router
          routes={[
            { path: "/", element: <HomePage /> },
            { path: "/help", element: <HelpPage /> },
          ]}
          defaultElement={<HomePage />}
        />
      </PasswordContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
