import type { ReactNode } from "react";
import type React from "react";
import { DefaultContainerStyle } from "./DefaultContainer.style";

interface DefaultContainerProps {
  children?: ReactNode;
}

const DefaultContainer: React.FC<DefaultContainerProps> = ({ children }) => {
  return (
    <DefaultContainerStyle disableGutters maxWidth="lg">
      {children}
    </DefaultContainerStyle>
  );
};

export default DefaultContainer;
