import React, { useState } from "react";
import { Container } from "../common/container";
import { Button } from "../common/button";
import BestIncident from "./BestIncident";
import Incidents from "./incidents";

export default function NewIncident() {
  const [start, setStart] = useState(false);
  const best = () => setStart(!start);

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(!show);

  return (
    <>
      {show && (
        <Container className="bg-white h-[86vh] pt-0.5">
          {start ? (
            <BestIncident Backing={best} onClose={handleClose} />
          ) : (
            <Container className="bg-white h-[86vh] pt-0.5">
              <div className="mx-auto w-[815px] h-auto my-5 sm:my-20">
                <div className="px-5 sm:px-0 sm:flex flex-col justify-center items-center">
                  <h1 className="h-10 text-2xl sm:text-3xl md:text-[32px] font-bold ">
                    Let's get started
                  </h1>
                  <p className="text-lowLight text-sm sm:text-base w-[90vw] sm:w-[468px] mt-3 ">
                    Lorem ipsum dolar sit general sac mascho werhoLorem ipsum
                    dolar sit general sac mascho werhoLorem ipsum dolar sit gene
                  </p>
                </div>

                <div className="w-0 sm:w-[814px] py-0 sm:py-9 px-[105px]">
                  <div className="bg-card h-[3px] "></div>
                  <div className="flex justify-between items-center">
                    <div className="w-[29px] h-[29px] bg-card rounded-full -mt-4 "></div>
                    <div className="w-[29px] h-[29px] bg-card rounded-full -mt-4 "></div>
                    <div className="w-[29px] h-[29px] bg-card rounded-full -mt-4 "></div>
                  </div>
                </div>

                <div className="grid grid-cols-12 justify-between items-center gap-14 ps-5 sm:ps-0 mx-auto">
                  <div className="col-span-12 sm:col-span-4 flex flex-col justify-start items-start bg-card py-[25px] px-5 rounded-[10px] border border-card pr-5 sm:pr-0 w-[90vw] sm:w-[235px] h-[269px] ">
                    <img src="/what.png" alt="" />
                    <div className="mt-16">
                      <h4 className="text-xl font-bold">
                        What type of incident?
                      </h4>
                      <p className="text-lowLight text-[14px] leading-[22px] ">
                        Choose the category that best describes the incident.
                      </p>
                    </div>
                  </div>

                  <div className="col-span-12 sm:col-span-4 flex flex-col justify-start items-start bg-card py-[25px] px-5 rounded-[10px] border border-card w-[90vw] sm:w-[235px] h-[269px] ">
                    <img src="/tell.png" alt="" />
                    <div className="mt-16">
                      <h4 className="text-xl font-bold">
                        Tell us about the incident?
                      </h4>
                      <p className="text-lowLight text-[14px] leading-[22px] ">
                        Let’s connect the dots and see where to start.
                      </p>
                    </div>
                  </div>

                  <div className="col-span-12 sm:col-span-4 flex flex-col justify-start items-start bg-card py-[25px] px-5 rounded-[10px] border border-card w-[90vw] sm:w-[235px] h-[269px] ">
                    <img src="/where.png" alt="" />
                    <div className="mt-16">
                      <h4 className="text-xl font-bold">
                        Where did the incident occur?
                      </h4>
                      <p className="text-lowLight text-[14px] leading-[22px] ">
                        Lorem ipsum dolar sit general sac mascho werho
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center mb-32 ">
                <div onClick={best}>
                  <Button className="rounded-[6px] ">Get started</Button>
                </div>
              </div>
            </Container>
          )}
        </Container>
      )}
      {!show && <Incidents />}
    </>
  );
}
