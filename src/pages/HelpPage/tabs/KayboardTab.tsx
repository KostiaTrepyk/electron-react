import React from "react";
import { Box, Typography } from "@mui/material";

const KeyboardTab = () => {
  return (
    <Box
      sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
        gap: 1.5,
        mx: "auto",
      }}
    >
      <Typography sx={{ mb: 1 }} variant="h5">
        Keyboard
      </Typography>

      <Typography>
        <Typography sx={{ color: "#2bf" }} component="span">
          H
        </Typography>{" "}
        - show/hide help.
      </Typography>

      <Typography>
        <Typography sx={{ color: "#2bf" }} component="span">
          S
        </Typography>{" "}
        - show/hide password.
      </Typography>

      <Typography>
        <Typography sx={{ color: "#2bf" }} component="span">
          G
        </Typography>{" "}
        - generate password.
      </Typography>

      <Typography>
        <Typography sx={{ color: "#2bf" }} component="span">
          Space
        </Typography>{" "}
        - show/hide settings.
      </Typography>
    </Box>
  );
};

export default KeyboardTab;
