import React from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";

import { useRouterContext } from "../../core/router/hooks/useRouterContext";

const HelpPage = () => {
  const { navigate } = useRouterContext();
  return (
    <>
      <Box>
        <Tooltip title="Back">
          <IconButton sx={{ m: 1 }} onClick={() => navigate("/")} size="large">
            <ArrowBackIosNew />
          </IconButton>
        </Tooltip>
      </Box>

      <Box sx={{ m: 4, display: "flex", flexDirection: "column", gap: 1.5 }}>
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
    </>
  );
};

export default HelpPage;
