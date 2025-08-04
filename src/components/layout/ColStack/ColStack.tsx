import { ColStackStyle } from "./ColStack.style";

interface ColStackProps {
  children: React.ReactNode;
}

const ColStack: React.FC<ColStackProps> = ({ children }) => {
  return <ColStackStyle spacing={2}>{children}</ColStackStyle>;
};

export default ColStack;
