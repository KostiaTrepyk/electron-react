import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./core/theme";
import RouterContextProvider from "./core/router/context/RouterContextProvider";
import Router from "./core/router/components/Router";
import DefaultKeyboard from "./core/keyboard/default";
import PasswordContextProvider from "./contexts/PasswordContext/Provider";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import HelpPage from "./pages/HelpPage";

import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PasswordContextProvider>
        <RouterContextProvider>
          <DefaultKeyboard />
          <Router
            routes={[
              { path: "/", element: <HomePage /> },
              { path: "/help", element: <HelpPage /> },
            ]}
            defaultElement={<HomePage />}
            layout={Layout}
            animateVeiwTransition
          />
        </RouterContextProvider>
      </PasswordContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
