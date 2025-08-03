import { VerticalStackStyle } from "./VerticalStack.style";

interface VerticalStackProps {
  children: React.ReactNode;
}

const VerticalStack: React.FC<VerticalStackProps> = ({ children }) => {
  return <VerticalStackStyle spacing={2}>{children}</VerticalStackStyle>;
};

export default VerticalStack;
