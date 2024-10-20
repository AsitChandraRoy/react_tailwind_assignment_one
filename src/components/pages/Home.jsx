import React from "react";
import { Button } from "../common/button";
import { Container } from "../common/container";

function Home() {
  return (
    <>
      <Container className="h-24 bg-card">
        <div
          className="flex justify-between items-center px-5
             sm:px-7 md:px-10 xl:px-12 pt-5"
        >
          <div id="1">
            <p className="text-lowLight text-[10px] md:text-xs">Welcome back</p>
            <h1 className="font-bold  md:text-xl xl:text-2xl">Dashboard</h1>
          </div>
          <div className="grid grid-cols-12 end-0 items-end text-xs gap-3 text-lowLight">
            <div className="col-span-12 sm:col-span-6 flex justify-start ps-2 pe-5 py-[5px] gap-1 rounded-sm bg-[#ffffff]">
              <img className="" src="/search.png" alt="" />
              <input className="border-none" type="text" placeholder="Search incident" />
            </div>
            <p className="col-span-12 sm:col-span-3 bg-[#ffffff] p-1.5 rounded-sm">
              Sort By: Date modified
            </p>
            <Button className="col-span-12 sm:col-span-3">Cypher AI</Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
