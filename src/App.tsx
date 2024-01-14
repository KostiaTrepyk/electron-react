import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./core/theme";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
