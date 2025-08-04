import type React from "react";
import { FlexItemRowStackStyle } from "./FlexItemRowStack.style";

interface FlexItemRowStackProps {
  children: React.ReactNode;
}

const FlexItemRowStack: React.FC<FlexItemRowStackProps> = ({ children }) => {
  return (
    <FlexItemRowStackStyle direction="row" spacing={1} alignItems="center">
      {children}
    </FlexItemRowStackStyle>
  );
};

export default FlexItemRowStack;
