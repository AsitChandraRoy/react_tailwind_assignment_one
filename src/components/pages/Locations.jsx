import React from "react";
import Hero from "../common/hero";
import NewLocation from "./Newlocation";

function Locations() {
  return (
    <>
      <Hero
        direction="Incidents - DR-4699 March 2023 Severe Storms "
        itemName="DR-4699 March 2023 Severe Storms"
        sort="Sort By: Date modified"
        plus="+"
        btnText="New Location"
        tree="/blackTree.png"
        wm="w-5 mr-2 "
      />
      <NewLocation />
    </>
  );
}

export default Locations;
