import React from "react";
import RootBox from "../../components/basics/RootBox/RootBox";
import LandingAppBar from "./LandingAppBar/LandingAppBar";
import VerticalStack from "../../components/basics/VerticalStack/VerticalStack";
import DefaultContainer from "../../components/basics/DefaultContainer/DefaultContainer";
import HorizontalStack from "../../components/basics/HorizontalStack/HorizontalStack";
import HeroItemStack from "./HeroItemStack/HeroItemStack";

const LandingPage: React.FC = () => {
  return (
    <RootBox>
      <LandingAppBar />
      <VerticalStack>
        <DefaultContainer>
          <HorizontalStack>
            <HeroItemStack />
          </HorizontalStack>
        </DefaultContainer>
      </VerticalStack>
    </RootBox>
  );
};

export default LandingPage;
