import React from "react";
import Earnings from "./LeftComponentsAssets/Earnings";
import SplineArea from "./LeftComponentsAssets/SplineArea";

const LeftComponents = () => {
  return (
    <div className=" flex-col w-full  space-y-4 ">
      <div className=" rounded-lg bg-white ">
        {/* Diagram Div */}
        <SplineArea />
      </div>
      <div className="flex w-full space-x-4">
        {/* Earning && Conversions */}
        <div className=" h-72 w-2/5 bg-white rounded-md">
          {/* This Earning */}

          <Earnings />
        </div>
        <div className=" h-72 w-3/5 bg-white rounded-md">
          {/* Conversions */}
        </div>
      </div>
      <div className="flex w-full h-96 bg-white rounded-md">
        {/* Enterprices Clients */}
      </div>
    </div>
  );
};

export default LeftComponents;
