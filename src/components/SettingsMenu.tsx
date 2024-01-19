import React from "react";
import {
  Box,
  Drawer,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { ArrowBackIosNew as ArrowBackIcon } from "@mui/icons-material";

interface SettingsMenuProps {
  open: boolean;
  onClose: () => void;
  passwordLength: number;
  onChangePasswordLength: (newLength: number) => void;
  charactersType: "alphabetic" | "alphanumeric" | "numeric";
  onChangeCharactersType: (
    newType: "alphabetic" | "alphanumeric" | "numeric"
  ) => void;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({
  open,
  onClose,
  passwordLength,
  onChangePasswordLength,
  charactersType,
  onChangeCharactersType,
}) => {
  return (
    <Drawer anchor="bottom" open={open} onClose={onClose} variant="persistent">
      <IconButton
        sx={{
          mt: 1,
          width: "fit-content",
          marginInline: "auto",
        }}
        onClick={onClose}
      >
        <ArrowBackIcon sx={{ rotate: "-90deg" }} />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          padding: "5% 0",
        }}
      >
        <TextField
          variant="standard"
          label="Length"
          type="number"
          value={passwordLength}
          onChange={(e) =>
            onChangePasswordLength(Number(e.currentTarget.value))
          }
        />

        <Select
          value={charactersType}
          onChange={(e) => onChangeCharactersType(e.target.value as any)}
        >
          <MenuItem value={"alphabetic"}>Alphabetic</MenuItem>
          <MenuItem value={"alphanumeric"}>Alphanumeric</MenuItem>
          <MenuItem value={"numeric"}>Numeric</MenuItem>
        </Select>
      </Box>
    </Drawer>
  );
};

export default SettingsMenu;
