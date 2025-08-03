import React from "react";
import DefaultToolbar from "../../components/DefaultToolbar/DefaultToolbar";
import DefaultContainer from "../../components/DefaultContainer/DefaultContainer";
import DefaultAppBar from "../../components/DefaultAppBar/DefaultAppBar";
import RootBox from "../../components/RootBox/RootBox";
import ToolbarLogo from "./ToolbarLogo/ToolbarLogo";
import ToolbarActions from "./ToolbarActions/ToolbarActions";

const LandingPage: React.FC = () => {
  return (
    <RootBox>
      <DefaultAppBar>
        <DefaultContainer>
          <DefaultToolbar>
            <ToolbarLogo />
            <ToolbarActions />
          </DefaultToolbar>
        </DefaultContainer>
      </DefaultAppBar>
    </RootBox>
  );
};

export default LandingPage;
