import React from "react";
import Hero from "../common/hero";
import CardBody from "../Dashboard/CardBody";

function Activities() {
  return (
    <>
      <Hero
        direction="Home - Activities"
        itemName="Activities"
        sort="Sort By: Date modified"
        plus="+"
        btnText="New Activity"
      />
      <CardBody />
    </>
  );
}

export default Activities;
