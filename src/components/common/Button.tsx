import { cn } from "@/src/utils/cn";
import { FC, ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "v1" | "v2";
  size?: "small" | "medium" | "large";
  icon?: ReactNode;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  icon,
  children,
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium focus:outline-none transition-colors duration-300",
        {
          "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
          "bg-gray-600 text-white hover:bg-gray-700": variant === "secondary",
          "border border-blue-600 text-blue-600 hover:bg-blue-50":
            variant === "outline",
          "bg-white text-black/30 rounded-sm h-10 w-10": variant === "v1",
          "bg-white text-yellow-600 rounded-none font-semibold text-3xl":
            variant === "v2",
          "opacity-50 cursor-not-allowed": disabled,
        },
        {
          "px-3 py-1 text-sm": size === "small",
          "px-4 py-2 text-base": size === "medium",
          "px-6 py-3 text-lg": size === "large",
        },
        className
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
