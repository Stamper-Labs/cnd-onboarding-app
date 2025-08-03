import { Typography } from "@mui/material";
import React from "react";
import VerticalStack from "../../../components/basics/VerticalStack/VerticalStack";
import winnersImg from "../../../assets/winners.svg";
import { HeroImageStyle, HeroLegendBoxStyle } from "./HeroItemStack.style";

const HeroItemStack: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default HeroItemStack;
