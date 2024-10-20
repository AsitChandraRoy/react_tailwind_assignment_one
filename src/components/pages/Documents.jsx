import React from "react";
import Hero from "../common/hero";
import CardBody from "../Dashboard/CardBody";

function Documents() {
  return (
    <>
      <Hero
        direction="Home - Documents"
        itemName="Documents"
        sort="Sort By: Date modified"
        plus="+"
        btnText="New Document"
      />
      <CardBody />
    </>
  );
}

export default Documents;
