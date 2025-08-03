import { Typography } from "@mui/material";
import React from "react";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import { ToolbarLogoStyle } from "./ToolbarLogo.style";

interface ToolbarLogoProps {
  children?: React.ReactNode;
}

const ToolbarLogo: React.FC<ToolbarLogoProps> = () => {
  return (
    <ToolbarLogoStyle>
      <DirectionsBoatFilledIcon
        fontSize="large"
        color="inherit"
      ></DirectionsBoatFilledIcon>
      <Typography variant="h6">Connduct</Typography>
    </ToolbarLogoStyle>
  );
};

export default ToolbarLogo;
