import React, { useState } from "react";
import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
import {
  ContentCopy as ContentCopyICon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

import Navbar from "../../components/Navbar";
import SettingsMenu from "../../components/SettingsMenu";

const HomePage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [passwordLength, setPasswordLength] = useState<number>(8);
  const [generatedPassword, setGeneratedPassword] = useState<string>("");
  const [isSettingOpened, setIsSettingOpened] = useState<boolean>(false);
  const [charactersType, setCharactersType] = useState<
    "alphabetic" | "alphanumeric" | "numeric"
  >("alphanumeric");

  function generatePassword() {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";

    let charset = "";
    if (charactersType === "alphabetic") charset = letters;
    else if (charactersType === "numeric") charset = nums;
    else charset = letters + nums;

    let result = "";

    for (var i = 0, n = charset.length; i < passwordLength; ++i) {
      result += charset.charAt(Math.floor(Math.random() * n));
    }

    setGeneratedPassword(result);
  }

  function CopyToClipboard(str: string) {
    navigator.clipboard.writeText(str);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
        width: "100dvw",
        position: "relative",
      }}
    >
      <Navbar />

      <Box
        style={{
          flexGrow: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          padding: "5%",
        }}
      >
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
                  color="white"
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
            <Typography variant="h5" color={"white"}>
              Password generator
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "fit-content",
            marginInline: "auto",
          }}
        >
          <Button
            sx={{ width: "fit-content" }}
            variant="contained"
            color="primary"
            onClick={generatePassword}
          >
            Generate
          </Button>

          <IconButton
            sx={{ marginInline: "auto" }}
            size="large"
            onClick={() => setIsSettingOpened((prev) => !prev)}
          >
            <SettingsIcon />
          </IconButton>
        </Box>

        <SettingsMenu
          open={isSettingOpened}
          onClose={() => setIsSettingOpened(false)}
          passwordLength={passwordLength}
          onChangePasswordLength={(newLength) => setPasswordLength(newLength)}
          charactersType={charactersType}
          onChangeCharactersType={(newType) => setCharactersType(newType)}
        />
      </Box>
    </Box>
  );
};

export default HomePage;
