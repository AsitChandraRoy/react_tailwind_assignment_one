import React from "react";
import { LocationDetails } from "../../lib/db";

export default function NewLocation() {
  return (
    <>
      <div className="grid grid-cols-12 justify-between bg-[#ffffff] py-5 px-10 mx-auto ">
        <div className="col-span-12 sm:col-span-6">
          <div className="flex items-center justify-start gap-3 ">
            <div className="w-[37px] h-[37px] bg-card flex justify-center items-center rounded-full ">
              <img src="/location.png" alt="" />
            </div>

            <div>
              <p className="text-sm text-lowLight">Location</p>
              <h1 className="text-xl font-bold">
                Tulare County, Los Angles, CA 23415
              </h1>
            </div>
          </div>

          <div className="flex items-center justify-start gap-3 py-5 border-b ">
            <div className="w-[37px] h-[37px] bg-card flex justify-center items-center rounded-full ">
              <img src="/camera2.png" alt="" />
            </div>

            <div>
              <p className="text-sm text-lowLight">Approx. Cost:</p>
              <h1 className="text-xl font-bold">$60,607,456.00</h1>
            </div>
          </div>

          <div className="py-5 border-b">
            <h5 className="font-bold text-sm">Description</h5>
            <p className="text-[16px] text-lowLight ">
              Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar
              sit general sac mascho werhoLorem ipsum dolar sit general sac
              mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem
              ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
              general sac mascho werho
            </p>
          </div>

          <div className="py-5 border-b">
            <div className="flex justify-between items-center">
              <h6 className="text-sm font-bold">Locations</h6>
              <p className="text-sm underline text-[#A1A1AA]">See all</p>
            </div>

            <div>
              <div className="grid grid-cols-12 gap-3 py-2">
                {LocationDetails.map(
                  ({ img, image, text, cardTitle, address, amount }, i) => (
                    <div
                      key={i}
                      className="md:col-span-4 sm:col-span-6 col-span-12 hover:scale-105 transition-all duration-300"
                    >
                      <div className="text-xs font-bold">
                        <div className="flex flex-row-reverse">
                          <div className="absolute z-10 me-2 mt-2 p-1 rounded-[28px] flex gap-1 bg-white">
                            <img src={img} alt="" />
                            <p className="text-[10px] font-bold ">{text}</p>
                          </div>
                        </div>
                        <img
                          className="w-[700px] relative"
                          src={image}
                          alt=""
                        />
                      </div>
                      <div className="mt-1 leading-[30px]">
                        <h1 className="text-sm font-bold">{cardTitle}</h1>
                        <p className="text-xs text-lowLight">{address}</p>
                        <h1 className="font-bold text-sm">{amount}</h1>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="pt-5 border-b pb-10">
            <div className="flex justify-between items-center">
              <h6 className="text-sm font-bold">Activities</h6>
              <p className="text-sm underline">See all</p>
            </div>
            <div className="flex items-center gap-5 bg-[#f4f4f5] p-3 rounded-[10px] mt-3 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div>
                <img src="/Building.png" alt="" />
              </div>
              <div className="space-y-1.5">
                <h5 className="text-[16px] font-bold ">Activity name</h5>
                <div className="text-sm flex items-center">
                  <span>Location name</span>
                  <div className="w-[4px] h-[4px] bg-[#a1a1aa] rounded-full mx-1"></div>
                  <span>16.12212, -122.1424</span>
                </div>

                <h5 className="text-[16px] font-bold ">$1,456,654.00</h5>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-[#f4f4f5] p-3 rounded-[10px] mt-3 hover:scale-105 transition-all duration-300 cursor-pointer ">
              <div>
                <img src="/Building.png" alt="" />
              </div>
              <div className="space-y-1.5">
                <h5 className="text-[16px] font-bold ">Activity name</h5>
                <div className="text-sm flex items-center">
                  <span>Location name</span>
                  <div className="w-[4px] h-[4px] bg-[#a1a1aa] rounded-full mx-1"></div>
                  <span>16.12212, -122.1424</span>
                </div>

                <h5 className="text-[16px] font-bold ">$1,456,654.00</h5>
              </div>
            </div>
          </div>

          <div className="py-5">
            <div className="flex justify-between items-center">
              <h6 className="text-sm font-bold">Documents</h6>
              <p className="text-sm underline">See all</p>
            </div>

            <div className="flex items-center gap-5 bg-[#f4f4f5] p-3 rounded-[10px] mt-3 hover:scale-105 transition-all duration-300 cursor-pointer ">
              <div>
                <img src="/Building.png" alt="" />
              </div>
              <div className="space-y-1.5">
                <h5 className="text-[16px] font-bold ">Document name</h5>
                <div className="text-sm flex items-center">
                  <span>Location name</span>
                  <div className="w-[4px] h-[4px] bg-[#a1a1aa] rounded-full mx-1"></div>
                  <span>16.12212, -122.1424</span>
                </div>

                <h5 className="text-[16px] font-bold ">$1,456,654.00</h5>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-[#f4f4f5] p-3 rounded-[10px] mt-3 hover:scale-105 transition-all duration-300 cursor-pointer ">
              <div>
                <img src="/Building.png" alt="" />
              </div>
              <div className="space-y-1.5">
                <h5 className="text-[16px] font-bold ">Document name</h5>
                <div className="text-sm flex items-center">
                  <span>Location name</span>
                  <div className="w-[4px] h-[4px] bg-[#a1a1aa] rounded-full mx-1"></div>
                  <span>16.12212, -122.1424</span>
                </div>

                <h5 className="text-[16px] font-bold ">$1,456,654.00</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 flex flex-col items-end  ">
          <p className="lg:w-[526px] text-sm">Incident Map</p>
          <img className="py-5" src="/map2.png" alt="" />
          <pre className="font-honest lg:w-[526px] tracking-tighter sm:tracking-normal text-xs sm:text-sm">
            Start 19.1232, -118.233 End 19.3245, -119.2323
          </pre>
        </div>
      </div>
    </>
  );
}
