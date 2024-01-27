import React from "react";
import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
import {
  ContentCopy as ContentCopyICon,
  QuestionMark as QuestionMarkIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

import { usePasswordContext } from "../../contexts/PasswordContext/usePasswordContext";
import SettingsMenu from "../../components/SettingsMenu";
import { Keyboard } from "./Keyboard";
import { useRouterContext } from "../../core/router/hooks/useRouterContext";
import PasswordDifficulty from "../../components/PasswordDifficulty";

const HomePage = () => {
  const { navigate } = useRouterContext();
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

      <Tooltip title="Help">
        <IconButton
          sx={{ position: "absolute", right: 8, top: 8 }}
          onClick={() => navigate("/help")}
          size="large"
        >
          <QuestionMarkIcon />
        </IconButton>
      </Tooltip>

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
            <PasswordDifficulty />

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
