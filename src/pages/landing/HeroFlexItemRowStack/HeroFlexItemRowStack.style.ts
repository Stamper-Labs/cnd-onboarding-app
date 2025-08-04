import { Box, styled } from "@mui/material";

export const HeroLegendBoxStyle = styled(Box)(() => ({
  flex: 1,
}));

export const HeroImageStyle = styled("img")(() => ({
  width: "100%",
  height: "auto",
  maxWidth: "100%",
  objectFit: "contain",
}));
