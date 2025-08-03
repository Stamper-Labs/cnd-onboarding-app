import { Typography } from "@mui/material";
import React from "react";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import FlexItemRowStack from "../../../components/layout/FlexItemRowStack/FlexItemRowStack";

interface LogoRowStackProps {
  children?: React.ReactNode;
}

const LogoRowStack: React.FC<LogoRowStackProps> = () => {
  return (
    <FlexItemRowStack>
      <DirectionsBoatFilledIcon
        fontSize="large"
        color="inherit"
      ></DirectionsBoatFilledIcon>
      <Typography variant="h6">Connduct</Typography>
    </FlexItemRowStack>
  );
};

export default LogoRowStack;
