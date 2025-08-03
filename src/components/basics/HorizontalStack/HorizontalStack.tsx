import React from "react";
import { HorizontalStackStyle } from "./HorizontalStack.style";

interface HorizontalStackProps {
  children: React.ReactNode;
}

const HorizontalStack: React.FC<HorizontalStackProps> = ({ children }) => {
  return (
    <HorizontalStackStyle direction="row">{children}</HorizontalStackStyle>
  );
};

export default HorizontalStack;
