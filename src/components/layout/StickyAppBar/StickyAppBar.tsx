import type { ReactNode } from "react";
import { StickyAppBarStyle } from "./StickyAppBar.style";

interface StickyAppBarProps {
  children?: ReactNode;
}

const StickyAppBar: React.FC<StickyAppBarProps> = ({ children }) => {
  return <StickyAppBarStyle position="sticky">{children}</StickyAppBarStyle>;
};

export default StickyAppBar;
