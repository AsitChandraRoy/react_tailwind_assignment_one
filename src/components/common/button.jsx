import React from "react";
import { cn } from "../../lib/utils";

export const Button = ({ children, className }) => {
  return (
    <button
      className={cn(
        "font-bold py-2 sm:py-2 px-3.5 sm:px-[25px] bg-warning opacity-90 transition-all delay-160 hover:opacity-100 text-white rounded-md text-xs md:text-[12px]",
        className
      )}
    >
      {children}
    </button>
  );
};