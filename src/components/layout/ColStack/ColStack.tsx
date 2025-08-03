import { ColStackStyle } from "./ColStack.style";

interface VerticalStackProps {
  children: React.ReactNode;
}

const VerticalStack: React.FC<VerticalStackProps> = ({ children }) => {
  return <ColStackStyle>{children}</ColStackStyle>;
};

export default VerticalStack;
