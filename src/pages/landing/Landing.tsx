import React from "react";
import RootBox from "../../components/layout/RootBox/RootBox";
import ColStack from "../../components/layout/ColStack/ColStack";
import HeroFlexItemRowStack from "./HeroFlexItemRowStack/HeroFlexItemRowStack";
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
      <LargeContainer>
        <ColStack>
          <HeroFlexItemRowStack />
        </ColStack>
      </LargeContainer>
    </RootBox>
  );
};

export default LandingPage;
