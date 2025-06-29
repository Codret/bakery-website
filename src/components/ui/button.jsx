import React from "react";
import clsx from "clsx";

/**
 * Simple Button component with variant and styling support.
 */
export function Button({ children, variant = "default", className, ...props }) {
  const baseStyles = "px-4 py-2 rounded-xl font-medium transition-all";

  const variants = {
    default: "bg-pink-600 text-white hover:bg-pink-700",
    outline: "border border-pink-600 text-pink-600 hover:bg-pink-50",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
