import type React from "react";
import { DefaultToolbarStyle } from "./DefaultToolbar.style";

interface DefaultToolbarProps {
  children?: React.ReactNode;
}

const DefaultToolbar: React.FC<DefaultToolbarProps> = ({ children }) => {
  return <DefaultToolbarStyle disableGutters>{children}</DefaultToolbarStyle>;
};

export default DefaultToolbar;
