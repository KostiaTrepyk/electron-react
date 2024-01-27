import React from "react";
import { Box, Tooltip } from "@mui/material";

import { usePasswordContext } from "../contexts/PasswordContext/usePasswordContext";

const PasswordDifficulty = () => {
  const { generatedPassword } = usePasswordContext();

  if (!generatedPassword) return null;

  let difficulty = countPasswordDifficulty(generatedPassword);

  const difficultyColors: Record<number, string> = {
    0: "white",
    1: "lightgreen",
    2: "green",
    3: "yellow",
    4: "orange",
    5: "red",
    6: "purple",
  };

  return (
    <Tooltip title={"Difficulty: " + difficulty}>
      <Box
        sx={{
          width: "40px",
          height: "12px",
          bgcolor: difficultyColors[difficulty] ?? "transparent",
          transition: "background-color 0.3s",
        }}
      ></Box>
    </Tooltip>
  );
};

export default PasswordDifficulty;

function countPasswordDifficulty(password: string): number {
  let difficulty = 0;

  if (hasNums(password) && hasLetters(password)) difficulty++;
  if (hasSpecialChars(password)) difficulty++;

  if (password.length > 15) difficulty += 4;
  else if (password.length > 13) difficulty += 3;
  else if (password.length > 11) difficulty += 2;
  else if (password.length > 9) difficulty++;
  else if (password.length < 8) difficulty = 0;

  return difficulty;
}

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
