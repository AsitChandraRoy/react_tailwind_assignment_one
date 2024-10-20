import React from "react";
import { Button } from "../common/button";

export default function PopUpPage({ toggler }) {
  return (
    <>
      <div className="flex flex-row-reverse relative z-50">
        <div className="bg-[#f4f4f5] rounded-xl h-[448px] w-[331px] -mt-[630px] mr-10 drop-shadow-2xl">
          <h1 className="bg-[#f26922] rounded-t-xl p-3 font-bold text-[18px] leading-5 text-white">
            Chat with Cypher
          </h1>
          <div className="space-y-4 mt-5">
            <div className="flex flex-row-reverse">
              <p className="pb-[15px] pt-3 px-[13px] bg-[#3f3f46] border text-xs w-[213px] h-[57px] rounded-[7px] mx-3 text-white">
                Lorem ipsum dolar sit general sac mascho werho
              </p>
            </div>
            <p className="pb-[15px] pt-3 px-[13px] mx-3 text-lowLight text-xs w-[213px] h-[57px] rounded-[7px] border">
              Lorem ipsum dolar sit general sac mascho werho
            </p>
            <p className="pb-[15px] pt-3 px-[13px] mx-3 text-lowLight text-xs w-[213px] h-[57px] rounded-[7px] border">
              Lorem ipsum dolar sit general sac mascho werho
            </p>
            <div className="flex flex-row-reverse">
              <p className="pb-[15px] pt-3 px-[13px] bg-[#3f3f46] border text-xs w-[213px] h-[57px] rounded-[7px] mx-3 text-white">
                Lorem ipsum dolar sit general sac mascho werho
              </p>
            </div>
            <input
              className="h-[42px] w-[310px] mx-3 py-3 px-[10px] "
              type="text"
              placeholder="Enter your question..."
            />
          </div>

          <div className="flex justify-between items-center mt-2 px-3">
            <div className="flex justify-center items-center space-x-1">
              <img src="/camera.png" alt="" />
              <img src="/gallery.png" alt="" />
              <img src="/alpine.png" alt="" />
            </div>
            <Button className="rounded-2xl">send</Button>
          </div>
        </div>
      </div>
      {/* Close Button */}
      <div className="flex flex-row-reverse">
        <button
          className="text-black text-5xl -mt-[174px] mr-[78px] bg-white h-20 w-20 drop-shadow-2xl transition-shadow font-extralight rounded-full"
          onClick={toggler}
          aria-label="Close button"
        >
          &times;
        </button>
      </div>
    </>
  );
}
