import React, { useState } from "react";
import IncidentHero from "../common/IncidentHero";
import { Container } from "../common/container";
import { bestIncident } from "../../lib/db";
import { Button } from "../common/button";
import IncidentInput from "./IncidentInput";
import Incidents from "./incidents";

export default function BestIncident({ Backing, onClose }) {
  const [isCreate, setIsCreate] = useState(false);
  const create = () => setIsCreate(!isCreate);

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(!show);
  return (
    <>
      {show && (
        <Container>
          {!isCreate && <IncidentHero onClose={onClose} />}
          {isCreate ? (
            <IncidentInput Back={create} onClose={handleClose} />
          ) : (
            <div className="flex justify-end -mt-[70px] mr-12 items-center space-x-1 sm:space-x-3">
              <div  onClick={Backing}>
                <Button className="bg-[#ffffff] text-black opacity-70 border">
                  Back
                </Button>
              </div>
              <div onClick={create}>
                <Button>Next step</Button>
              </div>
            </div>
          )}

          {!isCreate && (
            <Container className="mt-20">
              <div className="mx-auto h-auto w-[753px] flex flex-col justify-center items-start p-1 sm:p-0 ">
                <div className="mt-4">
                  <h1 className="font-bold text-sm sm:text-2xl py-3">
                    Which of these best describes the incident?
                  </h1>
                </div>

                <div className="grid grid-cols-12 items-center gap-1">
                  {bestIncident.map(({ img, des }, i) => (
                    <div
                      key={i}
                      className="col-span-6 sm:col-span-3 flex items-center ps-4 gap-3 bg-card w-[166px] sm:w-[180px] h-[69px] border rounded-md hover:bg-warning hover:text-white  hover:cursor-pointer hover:scale-105 transition-all duration-300 "
                    >
                      <p className="white ">
                        <img src={img} alt="" />
                      </p>
                      <p className="text-sm">{des}</p>
                    </div>
                  ))}
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
