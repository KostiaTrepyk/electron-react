import React from "react";
const { ipcRenderer } = window.require("electron");
import { Channel } from "../../../electron/types/types";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Adb,
  Close as CloseIcon,
  Fullscreen as FullscreenIcon,
  Minimize as MinimizeIcon,
} from "@mui/icons-material";

const pages = ["Products", "Pricing", "Blog"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
          <Adb />
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
              <MinimizeIcon />
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
