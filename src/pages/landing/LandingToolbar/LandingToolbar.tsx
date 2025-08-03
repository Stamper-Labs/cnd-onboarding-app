import { Toolbar } from "@mui/material";
import React from "react";
import LogoRowStack from "../LogoRowStack/LogoRowStack";
import ActionsFragment from "../ActionsFragment/ActionsFragment";

const LandingToolbar: React.FC = () => {
  return (
    <Toolbar disableGutters>
      <LogoRowStack />
      <ActionsFragment />
    </Toolbar>
  );
};

export default LandingToolbar;
