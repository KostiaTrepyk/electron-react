import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const MBox = motion(Box);

/**  */ 
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

      {/* Animation when changing page */}
      <MBox
        style={{ display: "flex", flexGrow: 1 }}
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Box
          style={{
            flexGrow: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            background: "radial-gradient(#002735, #070707)",
            position: "relative",
          }}
          component="main"
        >
          {children}
        </Box>
      </MBox>
    </Box>
  );
};

export default Layout;
