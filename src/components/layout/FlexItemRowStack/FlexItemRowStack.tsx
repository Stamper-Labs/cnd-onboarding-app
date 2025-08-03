import type React from "react";
import { FlexItemRowStackStyle } from "./FlexItemRowStack.style";

interface FlexItemRowStackProps {
  children: React.ReactNode;
}

const FlexItemRowStack: React.FC<FlexItemRowStackProps> = ({ children }) => {
  return (
    <FlexItemRowStackStyle direction={"row"}>{children}</FlexItemRowStackStyle>
  );
};

export default FlexItemRowStack;
