import React from "react";
import { FlexItemBoxStyle } from "./FlexItemBox.style";

interface FlexItemBoxProps {
  children: React.ReactNode;
}

const FlexItemBox: React.FC<FlexItemBoxProps> = ({ children }) => {
  return <FlexItemBoxStyle>{children}</FlexItemBoxStyle>;
};

export default FlexItemBox;
