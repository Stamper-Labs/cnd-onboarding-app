import React from "react";
import RootBox from "../../components/layout/RootBox/RootBox";
import StickyAppBar from "../../components/layout/StickyAppBar/StickyAppBar";
import LargeContainer from "../../components/layout/LargeContainer/LargeContainer";
import LandingToolbar from "./LandingToolbar/LandingToolbar";

const LandingPage: React.FC = () => {
  return (
    <RootBox>
      <StickyAppBar>
        <LargeContainer>
          <LandingToolbar />
        </LargeContainer>
      </StickyAppBar>
    </RootBox>
  );
};

export default LandingPage;
