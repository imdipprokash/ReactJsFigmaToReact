import React from "react";
import { MdOutlineDone } from "react-icons/md";

import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";
import { data } from "./datasource";
import { FiChevronDown } from "react-icons/fi";

function DataGridHomePage() {
  return (
    <>
      <div className=" flex flex-col overflow-hidden">
        <div className="flex justify-between items-center px-6 py-3">
          <div>
            <h1 className=" text-xl">Enterprise Clients</h1>
            <div className=" flex space-x-3 items-center">
              <MdOutlineDone className=" text-blue-600 " size={20} />
              <h1 className=" text-gray-400">15 New Acquired this month</h1>
            </div>
          </div>
          <FiChevronDown size={25} />
        </div>

        {/* Data Grid  */}

        <div className="max-w-[69rem] flex justify-center">
          <GridComponent dataSource={data}>
            <ColumnsDirective>
              <ColumnDirective field="OrderID" />
              <ColumnDirective field="CustomerID" />
              <ColumnDirective field="EmployeeID" />
            </ColumnsDirective>
          </GridComponent>
        </div>
      </div>
    </>
  );
}

export default DataGridHomePage;
