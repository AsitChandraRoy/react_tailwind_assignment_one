import React, { useState } from "react";
import Hero from "../common/hero";
import CardBody from "../Dashboard/CardBody";
import NewIncident from "./NewIncident";

function Incidents() {
  const [isCreate, setIsCreate] = useState(false);
  const create = () => setIsCreate(!isCreate);
  return (
    <>
      {!isCreate && (
        <Hero
          direction="Home - Incidents"
          itemName="Incidents"
          sort="Sort By: Date modified"
          plus="+"
          btnText="New Incident"
        />
      )}
      {isCreate ? (
        <NewIncident />
      ) : (
        <div className="flex justify-end -mt-14 sm:-mt-[99px] mr-12">
          <button
            className="flex justify-center items-center gap-1 font-bold px-[23.2px] py-[2.2px] bg-warning opacity-90 transition-all delay-160 hover:opacity-100 mt-4 sm:-mt-[1px] mr-[132px] sm:mr-0 text-white rounded-md text-xs md:text-[12px]"
            type="button"
            onClick={create}
          >
            <span className="text-xl">+</span>New Incident
          </button>
        </div>
      )}
      {!isCreate && <div id="white" className="h-[38px]"></div>}
      {!isCreate && <CardBody />}
    </>
  );
}

export default Incidents;
