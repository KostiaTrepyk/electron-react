import React from "react";
import { Box, Typography } from "@mui/material";

import { usePasswordContext } from "../contexts/PasswordContext/usePasswordContext";

const PasswordComplexity = () => {
  const { generatedPassword } = usePasswordContext();

  let complexity = 0;

  if (hasNums(generatedPassword) && hasLetters(generatedPassword)) complexity++;
  if (hasSpecialChars(generatedPassword)) complexity++;

  if (generatedPassword.length > 15) complexity += 4;
  else if (generatedPassword.length > 13) complexity += 3;
  else if (generatedPassword.length > 11) complexity += 2;
  else if (generatedPassword.length > 9) complexity++;
  else if (generatedPassword.length < 8) complexity = 0;

  if (!generatedPassword) return null;

  const complexityColors: Record<number, string> = {
    0: "white",
    1: "lightgreen",
    2: "green",
    3: "yellow",
    4: "orange",
    5: "red",
    6: "purple",
  };

  return (
    <Box
      sx={{
        borderWidth: "0px",
        borderTopWidth: "2px",
        borderStyle: "solid",
        borderColor: complexityColors[complexity] ?? "white",
      }}
    >
      <Typography>Complexity: {complexity}</Typography>
    </Box>
  );
};

export default PasswordComplexity;

function hasNums(text: string): boolean {
  const regex = /\d/;

  return regex.test(text);
}

function hasLetters(text: string): boolean {
  const regex = /[a-zA-Z]/;

  return regex.test(text);
}

function hasSpecialChars(text: string): boolean {
  const regex = /[^a-zA-Z0-9]/;

  return regex.test(text);
}
