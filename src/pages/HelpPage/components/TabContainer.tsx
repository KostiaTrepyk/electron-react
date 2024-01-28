import React from "react";
import { Box } from "@mui/material";

const TabContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        my: 3,
        width: "fit-content",
        mx: "auto",
        maxWidth: "min(80%, 800px)",
        color: "#eee",
      }}
    >
      {children}
    </Box>
  );
};

export default TabContainer;
