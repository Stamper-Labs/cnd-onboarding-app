import React from "react";
import { Box } from "@mui/material";

interface FlexItemBoxImgProps {
  path: string;
}

const FlexItemBoxImg: React.FC<FlexItemBoxImgProps> = ({ path }) => {
  return (
    <Box
      component="img"
      src={path}
      alt="Descriptive alt text"
      sx={{
        width: "100%",
        height: "auto",
        maxWidth: "50%",
        objectFit: "contain",
        backgroundColor: "red",
      }}
    />
  );
};

export default FlexItemBoxImg;
