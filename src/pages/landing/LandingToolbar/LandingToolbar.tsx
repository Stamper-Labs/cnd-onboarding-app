import { Toolbar } from "@mui/material";
import React from "react";
import ActionsFragment from "../ActionsFragment/ActionsFragment";
import LogoFlexItemRowStack from "../LogoFlexItemRowStack/LogoFlexItemRowStack";

const LandingToolbar: React.FC = () => {
  return (
    <Toolbar disableGutters>
      <LogoFlexItemRowStack />
      <ActionsFragment />
    </Toolbar>
  );
};

export default LandingToolbar;
