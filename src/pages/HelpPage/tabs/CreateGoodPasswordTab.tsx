import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import TabContainer from "../components/TabContainer";

const CreateGoodPasswordTab = () => {
  return (
    <TabContainer>
      <Typography sx={{ mb: 2.5, fontWeight: 900 }} variant="h5">
        How to create a good password?
      </Typography>

      <Stack
        sx={{ m: 0, py: 0, px: 2 }}
        direction="column"
        spacing={1.5}
        component="ol"
      >
        <Typography component="li">
          Do not use sequential numbers or letters. For example, do not use
          1234, qwerty, jklm, 6789, etc.
        </Typography>

        <Typography component="li">
          Do not include your birth year or birth month/day in your password.
        </Typography>

        <Typography component="li">
          Uses a combination of upper- and lowercase letters, numbers, and
          symbols.
        </Typography>

        <Typography component="li">
          Combine different unrelated words in your password or passphrase.
        </Typography>

        <Typography component="li">
          Do not use names or words found in the dictionary.
        </Typography>

        <Typography component="li">
          Do not store your passwords in a document on your computer. Ensure
          you’re using the password manager tool.
        </Typography>

        <Typography component="li">Do not reuse your passwords.</Typography>
      </Stack>

      <Box>
        <Typography sx={{ mt: 2, mb: 1 }}>
          Remember never to share your passwords with anyone. This includes your
          colleagues, the IT/support team, customer service/helpdesk personnel,
          family members, and friends.
        </Typography>
        <Typography>
          Also, be aware of phishing emails, smishing texts, and vishing calls
          that ask for your password information — do not reply or provide any
          personal information, including your password, date of birth, address,
          or credit card details.
        </Typography>
      </Box>
    </TabContainer>
  );
};

export default CreateGoodPasswordTab;
