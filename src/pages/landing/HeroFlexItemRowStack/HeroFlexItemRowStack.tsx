import { Button, Typography } from "@mui/material";
import React from "react";
import winnersImg from "../../../assets/winners.svg";
import FlexItemRowStack from "../../../components/layout/FlexItemRowStack/FlexItemRowStack";
import FlexItemBox from "../../../components/layout/FlexItemBox/FlexItemBox";
import FlexItemBoxImg from "../../../components/layout/FlexItemBoxImg/FlexItemBoxImg";
import RowStack from "../../../components/layout/RowStack/RowStack";

const HeroFlexItemRowStack: React.FC = () => {
  return (
    <FlexItemRowStack>
      <FlexItemBox>
        <Typography variant="h3" gutterBottom>
          The seamless onboarding experience
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ textAlign: "justify" }}>
          Verify your email, phone number, and personal details through advanced
          and secure verification methods, designed to protect your data while
          making the onboarding experience fast, smooth, and user-friendly.
        </Typography>
        <RowStack>
          <Button variant="outlined" color="inherit">
            Register
          </Button>
          <Button variant="outlined" color="inherit">
            Login
          </Button>
        </RowStack>
      </FlexItemBox>
      <FlexItemBoxImg path={winnersImg} />
    </FlexItemRowStack>
  );
};

export default HeroFlexItemRowStack;
