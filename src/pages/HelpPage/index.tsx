import React, { useState } from "react";
import { Box, IconButton, Tab, Tooltip, Typography, Tabs } from "@mui/material";
import { ArrowBackIosNew as ArrowBackIosNewIcon } from "@mui/icons-material";

import { useRouterContext } from "../../core/router/hooks/useRouterContext";
import KeyboardTab from "./tabs/KayboardTab";
import PasswordDifficultyTab from "./tabs/PasswordDifficultyTab";
import CreateGoodPasswordTab from "./tabs/CreateGoodPasswordTab";

const HelpPage = () => {
  const { navigate } = useRouterContext();

  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <>
      <Box>
        <Tooltip title="Back">
          <IconButton sx={{ m: 1 }} onClick={() => navigate("/")} size="large">
            <ArrowBackIosNewIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={currentTab}
          onChange={(_, value) => setCurrentTab(value)}
          centered
        >
          <Tab label="Keyboard" />
          <Tab label="Password difficulty" />
          <Tab label="How to create a good password" />
        </Tabs>
      </Box>

      <CustomTabPanel value={currentTab} index={0}>
        <KeyboardTab />
      </CustomTabPanel>

      <CustomTabPanel value={currentTab} index={1}>
        <PasswordDifficultyTab />
      </CustomTabPanel>

      <CustomTabPanel value={currentTab} index={2}>
        <CreateGoodPasswordTab />
      </CustomTabPanel>
    </>
  );
};

export default HelpPage;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
