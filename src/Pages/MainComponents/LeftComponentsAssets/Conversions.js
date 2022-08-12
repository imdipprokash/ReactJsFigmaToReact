import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import ColumnCharts from "./ColumnCharts";

const Conversions = () => {
  return (
    <>
      <div className="flex justify-between px-8 py-6">
        <h1 className=" text-[25px] "> Conversions</h1>

        <div className=" flex items-center  space-x-3">
          <h1 className=" text-xl text-gray-500">This Week </h1>
          <IoIosArrowDown className=" text-2xl" />
        </div>
      </div>
      <div className=" flex px-8">
        <div>
          {/* Apex Chart */}
          <ColumnCharts />
        </div>
      </div>
    </>
  );
};

export default Conversions;
