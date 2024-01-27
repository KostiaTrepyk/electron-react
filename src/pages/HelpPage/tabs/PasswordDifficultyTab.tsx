import React from "react";
import { Box, Typography } from "@mui/material";

const PasswordDifficultyTab = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { sm: "row", xs: "column" },
        justifyContent: "space-evenly",
        gap: 6,
      }}
    >
      <Box
        sx={{
          maxWidth: "50%",
          my: 4,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        <Typography sx={{ mb: 1 }} variant="h5">
          Levels of difficulty
        </Typography>

        <Typography>
          0{" "}
          <Typography sx={{ color: "white" }} component="span">
            - not a password
          </Typography>
        </Typography>

        <Typography>
          1{" "}
          <Typography sx={{ color: "lightgreen" }} component="span">
            - very easy
          </Typography>
        </Typography>

        <Typography>
          2{" "}
          <Typography sx={{ color: "green" }} component="span">
            - easy
          </Typography>
        </Typography>

        <Typography>
          3{" "}
          <Typography sx={{ color: "yellow" }} component="span">
            - medium
          </Typography>
        </Typography>

        <Typography>
          4{" "}
          <Typography sx={{ color: "orange" }} component="span">
            - hard
          </Typography>
        </Typography>

        <Typography>
          5{" "}
          <Typography sx={{ color: "red" }} component="span">
            - very hard
          </Typography>
        </Typography>

        <Typography>
          6{" "}
          <Typography sx={{ color: "purple" }} component="span">
            - the best password
          </Typography>
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: "50%",
          my: 4,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        <Typography sx={{ mb: 1 }} variant="h5">
          How to create good password?
        </Typography>
        <Typography>- password length should be 10-16.</Typography>
        <Typography>
          - use not only letters and numbers, but also special characters.
        </Typography>
      </Box>
    </Box>
  );
};

export default PasswordDifficultyTab;
