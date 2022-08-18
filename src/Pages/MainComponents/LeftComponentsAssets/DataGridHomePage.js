import React from "react";
import { MdOutlineDone } from "react-icons/md";

import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";
import { data } from "../../../assets/data/datasource";
import { FiChevronDown } from "react-icons/fi";
import { ProgressBarComponent } from "@syncfusion/ej2-react-progressbar";
import { getValue } from "@syncfusion/ej2-base";
function DataGridHomePage() {
  const cusHeader = () => {
    return <div className=" ">OrderID</div>;
  };

  const cusImage = (props) => {
    const src = props.img;

    return (
      <div className=" flex space-x-4  items-center">
        <div className=" bg-[#C4CCF8] rounded-md h-[45px] w-[45px] flex justify-center items-center">
          <img src={src} alt="image" width={45} height={45} />
        </div>
        <h1 className=" text-[20px] text-[#232D42]">{props.Companies}</h1>
      </div>
    );
  };
  const conTemplate = (props) => {
    var data = props.Contacts;
    return (
      // broder-[#3A57E8]
      <div className=" flex pl-4">
        {data.map((item, index) => (
          <div
            className={`rounded-full w-10 h-10  items-center bg-white flex justify-center -ml-2`}
            style={{ border: "1px solid #3A57E8" }}
          >
            <h1 className=" text-[#3A57E8]">{item}</h1>
          </div>
        ))}
      </div>
    );
  };

  const cusCompletion = (props) => {
    var colorCode = props.Completion === 100 ? "#1AA053" : "#3A57E8";

    return (
      <>
        <div className="">
          <h1>{props.Completion}%</h1>
          <div className=" relative -left-2">
            <ProgressBarComponent
              id={props.Companies}
              type="Linear"
              progressColor={colorCode} //"#E3165B"||
              trackColor="#E9ECEF" //E9ECEF
              // showProgressValue={true}
              // labelStyle={{ color: "#FFFFFF" }}
              trackThickness={10}
              progressThickness={10}
              value={props.Completion}
              animation={{
                enable: true,
                duration: 2000,
                delay: 0,
              }}
              cornerRadius={"Round"}
            ></ProgressBarComponent>
          </div>
        </div>
      </>
    );
  };

  const roWDataBoundHandler = (args) => {
    var value = args.data.Order;
    // if (value) {
    //   if (value < 14000) {
    //     //Green
    //     args.row.classList.add("red");
    //   }
    //   if (value > 14000) {
    //     // args.row.classList.add("below-80");
    //     args.row.classList.add("green");
    //   }
    // }
  };

  const orderCustom = (props) => {
    var data = props.Order;
    var value = data.toLocaleString(undefined, { maximumFractionDigits: 2 });

    return (
      <>
        <div>${value}</div>
      </>
    );
  };

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

        <div className="xl:max-w-[70rem] 2xl:max-w-[74.8rem] flex justify-center ">
          <GridComponent
            dataSource={data}
            height="20.3rem"
            rowDataBound={roWDataBoundHandler}
            // allowRowDragAndDrop={true}
          >
            <ColumnsDirective>
              <ColumnDirective
                field="Companies"
                template={cusImage}
                textAlign={"Left"}
                width={300}
              />

              <ColumnDirective field="Contacts" template={conTemplate} />
              <ColumnDirective field="Order" template={orderCustom} />
              <ColumnDirective field="Completion" template={cusCompletion} />
            </ColumnsDirective>
          </GridComponent>
        </div>
      </div>
    </>
  );
}

export default DataGridHomePage;
