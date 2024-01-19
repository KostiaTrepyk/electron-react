import React from "react";
const { ipcRenderer } = window.require("electron");
import { Channel } from "../../../electron/types/types";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {
  Close as CloseIcon,
  Fullscreen as FullscreenIcon,
  Minimize as MinimizeIcon,
  Security as SecurityIcon,
} from "@mui/icons-material";

function ResponsiveAppBar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        "-webkit-app-region": "drag",
        bgcolor: "common.black",
        paddingInline: 1,
      }}
    >
      <Toolbar
        sx={{ justifyContent: "space-between" }}
        disableGutters
        variant="dense"
      >
        <Box sx={{ display: "flex" }}>
          <SecurityIcon />
        </Box>

        <Box sx={{ flexGrow: 0, display: "flex", gap: 0.5 }}>
          <Tooltip title="Minimalize">
            <IconButton
              onClick={() => {
                ipcRenderer.send(Channel.Minimize);
              }}
              size="small"
              sx={{
                "-webkit-app-region": "no-drag",
              }}
            >
              <MinimizeIcon
                sx={{
                  position: "relative",
                  bottom: 6,
                }}
              />
            </IconButton>
          </Tooltip>

          <Tooltip title="Maximize">
            <IconButton
              onClick={() => {
                ipcRenderer.send(Channel.Maximize);
              }}
              size="small"
              sx={{ "-webkit-app-region": "no-drag" }}
            >
              <FullscreenIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Quit application">
            <IconButton
              onClick={() => {
                ipcRenderer.send(Channel.QuitApplication);
              }}
              size="small"
              color="error"
              sx={{ "-webkit-app-region": "no-drag" }}
            >
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
