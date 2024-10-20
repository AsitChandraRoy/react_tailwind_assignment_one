import React from "react";
import { cn } from "../../lib/utils";

export const Container = ({ children, className }) => {
  return (
    <div className={cn("w-full mx-auto", className)}>
      {children}
    </div>
  );
};