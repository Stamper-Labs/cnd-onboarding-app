import React from "react";
import RootBox from "../../components/layout/RootBox/RootBox";
import ColStack from "../../components/layout/ColStack/ColStack";
import StickyAppBar from "../../components/layout/StickyAppBar/StickyAppBar";
import LargeContainer from "../../components/layout/LargeContainer/LargeContainer";
import LandingToolbar from "./LandingToolbar/LandingToolbar";
import FlexItemBox from "../../components/layout/FlexItemBox/FlexItemBox";
import HeroRowStack from "./HeroRowStack/HeroRowStack";

const LandingPage: React.FC = () => {
  return (
    <RootBox>
      <StickyAppBar>
        <LargeContainer>
          <LandingToolbar />
        </LargeContainer>
      </StickyAppBar>
      <ColStack>
        <FlexItemBox>
          <LargeContainer>
            <HeroRowStack />
          </LargeContainer>
        </FlexItemBox>
      </ColStack>
    </RootBox>
  );
};

export default LandingPage;
