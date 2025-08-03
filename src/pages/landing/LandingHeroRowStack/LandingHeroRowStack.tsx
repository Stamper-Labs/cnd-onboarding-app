import { Typography } from "@mui/material";
import React from "react";
import VerticalStack from "../../../components/layout/ColStack/ColStack";
import winnersImg from "../../../assets/winners.svg";
import {
  HeroImageStyle,
  HeroLegendBoxStyle,
} from "./LandingHeroRowStack.style";
import RowStack from "../../../components/layout/RowStack/RowStack";

const LandingHeroRowStack: React.FC = () => {
  return (
    <RowStack>
      <HeroLegendBoxStyle>
        <VerticalStack>
          <Typography variant="h3">
            The Seamless Onboarding Experience
          </Typography>
          <Typography variant="h6">
            Verify email, phone, and personal details with modern, secure
            methods ensuring a smooth and reliable onboarding experience.
          </Typography>
        </VerticalStack>
      </HeroLegendBoxStyle>
      <HeroImageStyle src={winnersImg} alt="Onboarding illustration" />
    </RowStack>
  );
};

export default LandingHeroRowStack;
