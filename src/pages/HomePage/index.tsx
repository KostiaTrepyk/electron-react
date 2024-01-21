import React from "react";
import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
import {
  ContentCopy as ContentCopyICon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

import { usePasswordContext } from "../../contexts/PasswordContext/usePasswordContext";
import SettingsMenu from "../../components/SettingsMenu";
import { Keyboard } from "./Keyboard";

const HomePage = () => {
  const [isSettingsOpened, setIsSettingsOpened] =
    React.useState<boolean>(false);
  const {
    showPassword,
    generatedPassword,

    setShowPassword,
    generateNewPassword,
  } = usePasswordContext();

  function CopyToClipboard(str: string) {
    navigator.clipboard.writeText(str);
  }

  function toggleSettingsOpened() {
    setIsSettingsOpened((prev) => !prev);
  }

  return (
    <>
      <Keyboard toggleSettingsOpened={toggleSettingsOpened} />

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Boolean(generatedPassword) ? (
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Tooltip title={showPassword ? "Hide" : "Reveal"}>
              <Typography
                sx={{
                  maxWidth: "50dvw",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                variant="h5"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword
                  ? generatedPassword
                  : new Array(generatedPassword.length).fill("∗")}
              </Typography>
            </Tooltip>

            <Tooltip title="Copy">
              <IconButton
                color="success"
                onClick={() => CopyToClipboard(generatedPassword)}
              >
                <ContentCopyICon />
              </IconButton>
            </Tooltip>
          </Box>
        ) : (
          <Typography variant="h5">Password generator</Typography>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          paddingBottom: "7dvh",
          width: "fit-content",
          marginInline: "auto",
        }}
      >
        <Button
          sx={{ width: "fit-content" }}
          variant="contained"
          color="primary"
          onClick={generateNewPassword}
        >
          Generate
        </Button>

        <Tooltip title="Settings">
          <IconButton
            sx={{ marginInline: "auto" }}
            size="large"
            onClick={() => setIsSettingsOpened(!isSettingsOpened)}
          >
            <SettingsIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <SettingsMenu
        open={isSettingsOpened}
        onClose={() => setIsSettingsOpened(false)}
      />
    </>
  );
};

export default HomePage;
