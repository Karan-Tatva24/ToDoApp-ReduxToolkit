import React from "react";

const Button = ({
  children,
  onClick,
  colorVariant = "default",
  size = "base",
  rounded = "md",
  className = "",
  disabled = false,
  ...props
}) => {
  const colorClasses = {
    default: "bg-indigo-500 text-white hover:bg-indigo-600",
    error: "bg-red-500 text-white hover:bg-red-600",
    info: "bg-blue-500 text-white hover:bg-blue-600",
    success: "bg-green-500 text-white hover:bg-green-600",
  };

  const sizeClasses = {
    sm: "py-1 px-2 text-sm",
    base: "py-2 px-4 text-base",
    md: "py-2 px-4 text-md",
    lg: "py-3 px-6 text-lg",
  };

  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed";

  return (
    <button
      className={`focus:outline-none transition-colors duration-200 ease-in-out ${
        colorClasses[colorVariant]
      } ${sizeClasses[size]} ${roundedClasses[rounded]} ${
        disabled ? disabledClasses : ""
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
