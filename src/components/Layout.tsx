import React from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
        width: "100dvw",
        color: "text.primary",
      }}
    >
      <Navbar />

      <Box
        sx={{
          background: "radial-gradient(#002735, #070707)",
          flexGrow: 1,
          overflowY: "auto",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
        component="main"
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
