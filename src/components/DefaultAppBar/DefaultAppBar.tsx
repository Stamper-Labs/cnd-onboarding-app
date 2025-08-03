import type { ReactNode } from "react";
import { DefaultAppBarStyle } from "./DefaultAppBar.style";

interface DefaultAppBarProps {
  children?: ReactNode;
}

const DefaultAppBar: React.FC<DefaultAppBarProps> = ({ children }) => {
  return <DefaultAppBarStyle position="sticky">{children}</DefaultAppBarStyle>;
};

export default DefaultAppBar;
