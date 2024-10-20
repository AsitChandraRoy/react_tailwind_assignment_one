import React, { useState } from "react";
import PopUpPage from "../pages/PopUpPage";

export default function CButton() {
  const [isOpen, setIsOpen] = useState(false);
  const toggler = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="flex flex-row-reverse bg-white">
        <button
          onClick={toggler}
          className="flex justify-center items-center rounded-full me-20 mb-24 h-[77px] w-[77px] bg-warning font-footC text-white text-[55px] opacity-90 transition-all delay-160 hover:opacity-100"
        >
          c
        </button>
      </div>
      {isOpen && <PopUpPage toggler={toggler} />}
    </>
  );
}
