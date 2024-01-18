import React, { useState } from "react";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { ContentCopy as ContentCopyICon } from "@mui/icons-material";

import Navbar from "../../components/Navbar";

const HomePage = () => {
  const [passwordLength, setPasswordLength] = useState<number>(5);
  const [generatedPassword, setGeneratedPassword] = useState<string>("");

  function generatePassword() {
    let charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789";

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
              <Typography
                sx={{
                  maxWidth: "50dvw",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
                variant="h5"
                color="white"
              >
                {generatedPassword}
              </Typography>
              <IconButton
                color="success"
                onClick={() => CopyToClipboard(generatedPassword)}
              >
                <ContentCopyICon />
              </IconButton>
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
            justifyContent: "center",
            gap: 2,
          }}
        >
          <TextField
            variant="standard"
            label="Length"
            type="number"
            value={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.currentTarget.value))}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={generatePassword}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
