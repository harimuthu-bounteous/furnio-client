import { cn } from "@/src/utils/cn";
import React, { FC, ChangeEvent } from "react";

interface InputProps {
  type?: "text" | "email" | "password";
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={cn(
        "w-full py-2 px-4 border rounded-lg focus:outline-none focus:border-gray-200",
        className
      )}
    />
  );
};

export default Input;
