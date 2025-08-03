import type { ReactNode } from "react";
import type React from "react";
import { LargeContainerStyle } from "./LargeContainer.style";

interface LargeContainerProps {
  children?: ReactNode;
}

const LargeContainer: React.FC<LargeContainerProps> = ({ children }) => {
  return (
    <LargeContainerStyle disableGutters maxWidth="lg">
      {children}
    </LargeContainerStyle>
  );
};

export default LargeContainer;
