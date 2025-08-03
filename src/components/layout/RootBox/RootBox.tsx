import React from "react";
import { RootBoxStyle } from "./RootBox.style";

interface RootBoxProps {
  children?: React.ReactNode;
}

const RootBox: React.FC<RootBoxProps> = ({ children }) => {
  return <RootBoxStyle>{children}</RootBoxStyle>;
};

export default RootBox;
