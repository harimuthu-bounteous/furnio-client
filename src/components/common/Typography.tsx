import { ReactNode } from "react";

type TypographyProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "caption";
  children?: ReactNode;
  value: string;
  className?: string; // Custom class for styling
};

const Typography = ({
  variant,
  children,
  value,
  className = "",
}: TypographyProps) => {
  const Component = variant;
  return <Component className={"font-poppins " + className}>{value}</Component>;
};

export default Typography;
