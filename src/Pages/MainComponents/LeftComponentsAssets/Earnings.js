import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import EarningsGauge from "./EarningsGauge";

const Earnings = () => {
  return (
    <>
      <div className="flex justify-between px-8 py-6">
        <h1 className=" text-[25px] "> Earnings</h1>

        <div className=" flex items-center  space-x-3">
          <h1 className=" text-xl text-gray-500">This Week </h1>
          <IoIosArrowDown className=" text-2xl" />
        </div>
      </div>
      <div className=" flex px-8">
        <div>
          {/* Apex Chart */}
          <EarningsGauge />
        </div>
      </div>
    </>
  );
};

export default Earnings;

// const text=()=>{
//   font-family: 'Inter';
// font-style: normal;
// font-weight: 500;
// font-size: 19px;
// }
