"use client";

import clsx from "clsx";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  type?: ButtonType;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  disabled?: boolean;
  ["data-testid"]?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button = ({
  className,
  size = "medium",
  variant = "primary",
  leftComponent,
  rightComponent,
  disabled = false,
  onClick,
  children,
}: ButtonProps) => {
  const baseStyles =
    "flex items-center justify-center rounded-md font-bold transition-all duration-200 cursor-pointer";

  const sizeStyles = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary: "bg-green-500 text-white hover:bg-green-600",
    tertiary:
      "bg-transparent text-green-600 border border-green-600 hover:bg-green-50",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className,
        {
          "cursor-not-allowed opacity-50": disabled,
        },
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {leftComponent && <span className="mr-2">{leftComponent}</span>}
      {children}
      {rightComponent && <span className="ml-2">{rightComponent}</span>}
    </button>
  );
};

export default Button;
