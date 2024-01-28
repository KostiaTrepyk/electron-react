import React from "react";
import { Stack, Typography } from "@mui/material";
import TabContainer from "../components/TabContainer";

const KeyboardTab = () => {
  return (
    <TabContainer>
      <Typography
        sx={{
          mb: 2.5 /* fontSize: "clamp(28px, 20px + 2vw, 50px)" */,
        }}
        variant="h5"
      >
        Keyboard
      </Typography>

      <Stack direction="column" spacing={1}>
        <Typography>
          <Typography sx={{ color: "#2bf" }} component="span">
            H
          </Typography>{" "}
          - show/hide help.
        </Typography>

        <Typography>
          <Typography sx={{ color: "#2bf" }} component="span">
            S
          </Typography>{" "}
          - show/hide password.
        </Typography>

        <Typography>
          <Typography sx={{ color: "#2bf" }} component="span">
            G
          </Typography>{" "}
          - generate password.
        </Typography>

        <Typography>
          <Typography sx={{ color: "#2bf" }} component="span">
            Space
          </Typography>{" "}
          - show/hide settings.
        </Typography>
      </Stack>
    </TabContainer>
  );
};

export default KeyboardTab;
