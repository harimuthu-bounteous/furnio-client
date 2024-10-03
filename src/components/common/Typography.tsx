import { ReactNode } from "react";

type TypographyProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "caption";
  children: ReactNode;
  className?: string; // Custom class for styling
};

const Typography = ({ variant, children, className = "" }: TypographyProps) => {
  const Component = variant;
  return (
    <Component className={"font-poppins " + className}>{children}</Component>
  );
};

export default Typography;
