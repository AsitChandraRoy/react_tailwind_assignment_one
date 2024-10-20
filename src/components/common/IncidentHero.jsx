import React from 'react'
import { Container } from './container'

export default function IncidentHero({onClose}) {
  return (
    <>
      <Container className="md:h-24 sm:h-28 h-32 bg-[#f1f1f3] ">
        <div
          className="  flex justify-between items-center px-1
             sm:px-7 md:px-10 xl:px-12 pt-5"
        >
          <div className="flex justify-center items-center gap-1 sm:gap-5">
            <p onClick={onClose} className="text-2xl bg-white h-[41px] w-[41px] rounded-full flex justify-center items-center border cursor-pointer">
              &times;
            </p>
            <div>
              <p className="text-lowLight text-[10px] md:text-xs">
                Home - Incidents - New Incident
              </p>
              <h1 className="font-bold  md:text-xl xl:text-2xl">
                New Incident
              </h1>
            </div>
          </div>

          <div className="flex justify-start p-2 py-1 rounded-sm mr-[485px]">
            <div className="bg-warning h-1 sm:w-[7vw] w-0"></div>
            <div className="sm:w-[30vw] w-0 h-1 bg-card "></div>
          </div>
        </div>
      </Container>
    </>
  )
}
