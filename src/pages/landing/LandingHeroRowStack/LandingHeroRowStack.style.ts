import { Box, styled } from "@mui/material";

export const HeroLegendBoxStyle = styled(Box)(() => ({
  flex: 1,
}));

export const HeroImageStyle = styled("img")(() => ({
  flex: 1,
  width: "100%",
  height: "auto",
  maxWidth: "50%",
  objectFit: "contain",
}));
