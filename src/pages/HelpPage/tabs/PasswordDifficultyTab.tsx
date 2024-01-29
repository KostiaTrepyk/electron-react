import React from "react";
import { Stack, Typography } from "@mui/material";
import TabContainer from "../components/TabContainer";

type Difficulty = { label: string; color: string };

const PasswordDifficultyTab = () => {
  const difficulties: Difficulty[] = [
    { label: " - not a password", color: "white" },
    { label: " - very easy", color: "lightgreen" },
    { label: " - easy", color: "green" },
    { label: " - medium", color: "yellow" },
    { label: " - hard", color: "orange" },
    { label: " - very hard", color: "red" },
    { label: " - insane", color: "purple" },
  ];

  return (
    <TabContainer>
      <Typography sx={{ mb: 2.5, fontWeight: 900 }} variant="h5">
        Levels of difficulty
      </Typography>

      <Stack direction="column" spacing={1}>
        {difficulties.map((item) => (
          <Typography
            sx={{
              borderLeft: `12px solid ${item.color}`,
              color: item.color,
              px: 1,
            }}
          >
            {item.label}
          </Typography>
        ))}
      </Stack>
    </TabContainer>
  );
};

export default PasswordDifficultyTab;
