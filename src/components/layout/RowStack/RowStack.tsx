import type React from "react";
import { RowStackStyle } from "./RowStack.style";

interface RowStackProps {
  children: React.ReactNode;
}

const RowStack: React.FC<RowStackProps> = ({ children }) => {
  return <RowStackStyle direction="row">{children}</RowStackStyle>;
};

export default RowStack;
