import React, { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      type = "text",
      className = "",
      value,
      onChange,
      colorVariant = "default",
      size = "base",
      rounded = "md",
      ...props
    },
    ref
  ) => {
    const colorClasses = {
      default:
        "bg-gray-800 border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 text-gray-100",
      error:
        "bg-red-800 border-red-700 focus:border-red-500 focus:ring-red-900 text-red-100",
      info: "bg-blue-800 border-blue-700 focus:border-blue-500 focus:ring-blue-900 text-blue-100",
      success:
        "bg-green-800 border-green-700 focus:border-green-500 focus:ring-green-900 text-green-100",
    };

    const sizeClasses = {
      sm: "py-1 px-2 text-sm",
      base: "py-1 px-3 text-base",
      lg: "py-2 px-4 text-lg",
    };

    const roundedClasses = {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    };

    return (
      <input
        className={`outline-none leading-8 transition-colors duration-200 ease-in-out ${colorClasses[colorVariant]} ${sizeClasses[size]} ${roundedClasses[rounded]} ${className}`}
        type={type}
        value={value}
        onChange={onChange}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
