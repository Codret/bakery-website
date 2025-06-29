import React from "react";
import clsx from "clsx";

/**
 * Card wrapper with optional className.
 */
export function Card({ children, className, ...props }) {
  return (
    <div
      className={clsx("bg-white rounded-xl overflow-hidden", className)}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Card content padding wrapper.
 */
export function CardContent({ children, className, ...props }) {
  return (
    <div className={clsx("p-4", className)} {...props}>
      {children}
    </div>
  );
}
