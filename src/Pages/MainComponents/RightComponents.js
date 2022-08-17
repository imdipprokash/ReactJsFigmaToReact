import React from "react";
import bag from "../../assets/RigthCom/Bag.png";
import buy from "../../assets/RigthCom/Buy.png";
import arrowUp from "../../assets/RigthCom/ArrowUp.png";
import { Data } from "../../assets/data/ActvityData.js";

const RightComponents = () => {
  return (
    <>
      {/* Visa Card  */}
      <div className=" mx-auto rounded-md bg-white  h-[35rem]">
        <div className="  h-[20rem] overflow-hidden rounded-t-md ">
          {/* Card */}
          <div className="blueCircle " />
          <div className="greenCircle" />
          <div className="CardDtls ">
            <div className=" flex  justify-between">
              <div>
                <h1 className=" text-[28px] text-white font-[700] font-[inter]">
                  VISA
                </h1>
                <h1 className=" text-white text-[13px]">PREMIUM ACCOUNT</h1>
              </div>
              <div className=" flex">
                <div className="whiteCircle" />
                <div className="whiteCircle1" />
              </div>
            </div>
            <div className=" w-64 flex justify-between items-center">
              {/* ATM Number */}
              <h1 className=" text-[23px] text-white font-[500]">5789</h1>
              <h1 className=" text-[23px] text-white font-[500]">****</h1>
              <h1 className=" text-[23px] text-white font-[500]">****</h1>
              <h1 className=" text-[23px] text-white font-[500]">2847</h1>
            </div>
            <div className="flex justify-between w-full  pr-4">
              {/* Card Holder dtls */}
              <div>
                <h1 className=" text-white text-[11px] font-[400]">
                  Card holder
                </h1>
                <h1 className=" text-white font-[500] text-[19px]">
                  Saroj Thakur
                </h1>
              </div>
              <div>
                <h1 className=" text-white text-[11px] font-[400]">
                  Expire date
                </h1>
                <h1 className=" text-white font-[500] text-[19px]">06/22</h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" space-y-2 p-8">
          {/* details */}
          <div className=" flex space-x-8">
            <div className=" flex  space-x-3">
              <div className=" bg-[#D8DDFA] rounded-md h-[32px] w-[32px] items-center flex justify-center">
                <img src={bag} alt="" height="20px" width="18px" />
              </div>
              <div>
                <h1 className=" text-[#232D42] font-[400] text-[16px]">1153</h1>
                <h1 className=" text-[#8A92A6] text-[13px] font-[400]">
                  Products
                </h1>
              </div>
            </div>
            <div className=" flex  space-x-3">
              <div className=" bg-[#D8DDFA] rounded-md h-[32px] w-[32px] items-center flex justify-center">
                <img src={buy} alt="" height="20px" width="18px" />
              </div>
              <div>
                <h1 className=" text-[#232D42] font-[400] text-[16px]">81K</h1>
                <h1 className=" text-[#8A92A6] text-[13px] font-[400]">
                  Order Served
                </h1>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-between">
            <div>
              <h1 className=" text-[#232D42] font-[400] text-[28px] font-[Inter]">
                $4,050,12,300
              </h1>
              <h1 className=" text-[#08B1BA] text-[16px] font-[400] ">
                Life time sales
              </h1>
            </div>
            <div className=" bg-[#1AA053] h-6 w-20 text-white rounded-3xl text-center">
              YoY 24%
            </div>
          </div>
          <div className=" flex justify-between pt-3">
            <div className=" w-[148px] h-[36px] rounded-xl bg-[#3A57E8]  ">
              <h1 className="text-white text-center pt-1.5 text-[14px] font-[400] font-[Inter] ">
                View Project
              </h1>
            </div>
            <div className=" w-[148px] h-[36px] rounded-xl bg-[#08B1BA]  ">
              <h1 className="text-white text-center pt-1.5 text-[14px] font-[400] font-[Inter] ">
                Analytics
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}

      <div className="mt-6 mb-6 flex rounded-xl h-24 w-full bg-white justify-between items-center px-6">
        <div>
          <h1 className="text-[28px] font-[500] font-[Inter]">750K</h1>
          <h1 className=" text-[#8A92A6] text-[16px] font-[400] font-[Inter]">
            Website Visitors
          </h1>
        </div>
        <div className=" rotate-180 w-[.15px] h-16 bg-gray-400 " />
        <div>
          <h1 className="text-[28px] font-[500] font-[Inter]">7,500</h1>
          <h1 className=" text-[#8A92A6] text-[16px] font-[400] font-[Inter]">
            New Customers
          </h1>
        </div>
      </div>

      {/* Actvity overviews */}
      <div className=" h-[31.5rem]  bg-white rounded-xl pl-4 pt-4">
        <div className="pb-3 space-y-3">
          <h1 className=" text-[23px] font-[500] font-[Inter]">
            Actvity overview
          </h1>
          <div className=" flex space-x-3">
            <img src={arrowUp} alt="" className=" h-5" />
            <h1 className=" text-[#8A92A6] text-[16px] font-[400] font-[Inter]">
              16% this month
            </h1>
          </div>
        </div>

        <div className="overflow-y-scroll scroll-smooth h-[25rem]">
          {Data.map((item) => (
            <div className="flex  space-x-3">
              <div>
                {/* design */}
                <div className=" rounded-full border-[2px] border-blue-600 h-5 w-5 " />
                <div className=" w-[1.5px] h-14 bg-gray-300 ml-[9px] -pt-1" />
              </div>
              <div>
                <h1 className=" text-[19px] font-[400] font-[Inter] ">
                  {!!item.price ? "$"+item.price+", " : ""}
                  {!!item.oderType ? item.oderType+" " : ""}
                  {!!item.oderId ? item.oderId+" " : ""}
                </h1>
                <h1 className=" text-[16px] font-[400] font-[Inter] text-[#8A92A6]">
                  {item.timeStamp}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RightComponents;

// //
