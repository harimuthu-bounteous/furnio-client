import { cn } from "@/src/utils/cn";
import { forwardRef, ReactNode } from "react";

interface ButtonProps {
  variant?:
    | "plain"
    | "primary"
    | "secondary"
    | "outline"
    | "v1"
    | "v2"
    | "v3"
    | "v4"
    | "v5";
  size?: "small" | "medium" | "large";
  icon?: ReactNode;
  children?: ReactNode;
  value: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      icon,
      value,
      onClick,
      className = "",
      disabled = false,
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium focus:outline-none transition-colors duration-300",
          {
            "": variant === "plain",
            "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
            "bg-gray-600 text-white hover:bg-gray-700": variant === "secondary",
            "border border-blue-600 text-blue-600 hover:bg-blue-50":
              variant === "outline",
            "bg-white text-black/30 rounded-sm h-10 w-10": variant === "v1",
            "bg-white text-yellow-600 rounded-none font-semibold px-14 py-3 md:px-6 md:py-1.5 lg:px-14 lg:py-3 text-xl md:text-base lg:text-xl":
              variant === "v2",
            "px-4 py-2 text-base bg-beige text-black hover:bg-yellow-600 hover:text-white transition-all":
              variant === "v3",
            "text-black bg-white bg-hover border-b-2 rounded-none px-0 py-0":
              variant === "v4",
            "mt-6 bg-white border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white rounded-none transition":
              variant === "v5",
            "opacity-50 cursor-not-allowed": disabled,
          },
          className
        )}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {value}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
