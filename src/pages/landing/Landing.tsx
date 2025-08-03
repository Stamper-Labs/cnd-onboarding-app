import React from "react";
import RootBox from "../../components/layout/RootBox/RootBox";
import StickyAppBar from "../../components/layout/StickyAppBar/StickyAppBar";
import LargeContainer from "../../components/layout/LargeContainer/LargeContainer";
import LandingToolbar from "./LandingToolbar/LandingToolbar";
import ColStack from "../../components/layout/ColStack/ColStack";
import LandingHeroRowStack from "./LandingHeroRowStack/LandingHeroRowStack";

const LandingPage: React.FC = () => {
  return (
    <RootBox>
      <StickyAppBar>
        <LargeContainer>
          <LandingToolbar />
        </LargeContainer>
      </StickyAppBar>
      <ColStack>
        <LargeContainer>
          <LandingHeroRowStack />
        </LargeContainer>
      </ColStack>
    </RootBox>
  );
};

export default LandingPage;
