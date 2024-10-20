import React from "react";
import Hero from "../common/hero";
import CardBody from "../Dashboard/CardBody";

function CypherAI() {
  return (
    <>
      <Hero
        direction="Home - Cypher AI"
        itemName="Cypher AI"
        sort="Sort By: Date modified"
        plus="+"
        btnText="New Cypher"
      />
      <CardBody />
    </>
  );
}

export default CypherAI;
