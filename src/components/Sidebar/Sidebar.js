import React from "react";
import logo from "../../assets/Logo.png";
import examp from "../../assets/Exam.svg";
import location from "../../assets/Location.svg";
import widge from "../../assets/Wid.svg";
import auth from "../../assets/Auth.svg";
import user from "../../assets/User.svg";
import error4 from "../../assets/Error.svg";
import error5 from "../../assets/Error5.svg";
import maintence from "../../assets/Maintence.svg";
import compo from "../../assets/Components.svg";
import form from "../../assets/Form.svg";
import table from "../../assets/Table.svg";
import icons from "../../assets/Icons.svg";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import shape from "../../assets/Shape.svg";

const menuList = [
  {
    name: "Example",
    icon: examp,
    shape: shape,
  },

  {
    name: "Widgets",
    icon: widge,
    shape: shape,
  },
  {
    name: "Maps",
    shape: shape,
    icon: location,
  },
  {
    name: "Authentication",
    icon: auth,
    shape: shape,
  },
  {
    name: "Users",
    icon: user,
    shape: shape,
  },
  {
    name: "Error 404",
    icon: error4,
    shape: "",
  },
  {
    name: "Error 505",
    icon: error5,
    shape: "",
  },
  {
    name: "Maintence",
    icon: maintence,
    shape: "",
  },
];
const eleList = [
  {
    name: "Components",
    icon: compo,
    shape: shape,
  },
  {
    name: "Form",
    icon: form,
    shape: shape,
  },
  {
    name: "Table",
    icon: table,
    shape: shape,
  },
  {
    name: "Icons",
    icon: icons,
    shape: shape,
  },
];

const Sidebar = () => {
  const map = "/static/media/Location.65061e5d5e64f436e611c20ba35d91f2.svg";
  return (
    <>
      <div className=" flex-none overflow-hidden">
        {/* Main Logo */}
        <div className="flex items-center space-x-2 px-10 py-3 ">
          <img src={logo} alt="logo " />
          <h1 className=" text-2xl font-semibold"> Distronix</h1>
          {/* Open/Close Icons */}
          <div className=" absolute pl-40">
            <BsFillArrowLeftCircleFill size={30} color="#3A57E8" className="" />
          </div>
        </div>
        {/* divider */}
        <div className=" border-b-2 border-gray-200" />
        {/* Main */}
        <div className="p-2">
          <div className=" p-4 ">
            <h1 className=" text-gray-400 font-medium text-lg">Home</h1>
          </div>
          <div>
            <div
              className=" flex items-center py-2 px-4 space-x-2 rounded-md "
              style={{ background: "#3A57E8" }}
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M14.0756 0.0117188H17.4616C18.8639 0.0117188 20.0001 1.15757 20.0001 2.57168V5.98624C20.0001 7.40036 18.8639 8.54621 17.4616 8.54621H14.0756C12.6734 8.54621 11.5371 7.40036 11.5371 5.98624V2.57168C11.5371 1.15757 12.6734 0.0117188 14.0756 0.0117188Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.53852 0.0117188H5.92449C7.32676 0.0117188 8.46301 1.15757 8.46301 2.57168V5.98624C8.46301 7.40036 7.32676 8.54621 5.92449 8.54621H2.53852C1.13626 8.54621 0 7.40036 0 5.98624V2.57168C0 1.15757 1.13626 0.0117188 2.53852 0.0117188ZM2.53852 11.4772H5.92449C7.32676 11.4772 8.46301 12.6231 8.46301 14.0372V17.4518C8.46301 18.8649 7.32676 20.0117 5.92449 20.0117H2.53852C1.13626 20.0117 0 18.8649 0 17.4518V14.0372C0 12.6231 1.13626 11.4772 2.53852 11.4772ZM17.4615 11.4772H14.0755C12.6732 11.4772 11.537 12.6231 11.537 14.0372V17.4518C11.537 18.8649 12.6732 20.0117 14.0755 20.0117H17.4615C18.8637 20.0117 20 18.8649 20 17.4518V14.0372C20 12.6231 18.8637 11.4772 17.4615 11.4772Z"
                  fill="white"
                />
              </svg>
              <dass />
              <h1 className=" text-gray-100 text-lg">Dashboard</h1>
            </div>

            <div className=" flex items-center py-2 px-4 space-x-4 rounded-md ">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M8.08329 12.9688H1.50777C0.675552 12.9688 0 13.6325 0 14.4501C0 15.2666 0.675552 15.9314 1.50777 15.9314H8.08329C8.91551 15.9314 9.59106 15.2666 9.59106 14.4501C9.59106 13.6325 8.91551 12.9688 8.08329 12.9688Z"
                  fill="#8A92A6"
                />
                <path
                  opacity="0.4"
                  d="M20.0001 3.39039C20.0001 2.57386 19.3246 1.91016 18.4934 1.91016H11.9179C11.0857 1.91016 10.4102 2.57386 10.4102 3.39039C10.4102 4.20801 11.0857 4.87172 11.9179 4.87172H18.4934C19.3246 4.87172 20.0001 4.20801 20.0001 3.39039Z"
                  fill="#8A92A6"
                />
                <path
                  d="M6.87774 3.39028C6.87774 5.25695 5.33886 6.76993 3.43887 6.76993C1.53999 6.76993 0 5.25695 0 3.39028C0 1.5247 1.53999 0.0117188 3.43887 0.0117188C5.33886 0.0117188 6.87774 1.5247 6.87774 3.39028Z"
                  fill="#8A92A6"
                />
                <path
                  d="M20.0008 14.4109C20.0008 16.2765 18.4619 17.7895 16.5619 17.7895C14.663 17.7895 13.123 16.2765 13.123 14.4109C13.123 12.5442 14.663 11.0312 16.5619 11.0312C18.4619 11.0312 20.0008 12.5442 20.0008 14.4109Z"
                  fill="#8A92A6"
                />
              </svg>

              <h1 className=" text-gray-400 text-lg">Menu Style</h1>
            </div>
          </div>
        </div>
        {/* divider */}
        <div className=" border-b-2 border-gray-200" />
        {/* Menu Title */}
        <div className="pt-4">
          <h1
            className=" font-semibold px-4 text-lg pb-2"
            style={{ color: "#ADB5BD" }}
          >
            Pages
          </h1>

          {menuList.map((item) => (
            <div className=" flex justify-between pr-4 py-2  items-center">
              <div className=" flex  px-6 justify-center space-x-4 items-center ">
                <img src={item.icon} className="w-6 h-6" alt="" />
                <h2 className={"text-gray-400 text-lg"}>{item.name}</h2>
              </div>
              <img
                src={item.shape}
                alt="Shape"
                className={`${item.shape === "" ? "hidden" : ""}`}
              />
            </div>
          ))}
        </div>
        {/* divider */}
        <div className=" border-b-2 border-gray-200 -pt-4" />

        {/* Menu Title */}
        <div className="pt-4">
          <h1
            className="  font-semibold px-4 text-lg pb-2"
            style={{ color: "#ADB5BD" }}
          >
            Elements
          </h1>
          {eleList.map((item) => (
            <div className=" flex justify-between pr-4 py-2  items-center">
              <div className=" flex  px-6 justify-center space-x-4 items-center ">
                <img src={item.icon} className="w-6 h-6" alt="" />
                <h2 className={"text-gray-400 text-lg"}>{item.name}</h2>
              </div>
              <img
                src={item.shape}
                alt="Shape"
                className={`${item.shape === "" ? "hidden" : ""}`}
              />
            </div>
          ))}
        </div>

        {/* divider */}
        <div className=" border-b-2 border-gray-200 -pt-4" />

        {/* design */}
        <div className=" pt-10 -mb-[30rem]">
          <div
            className="absolute   w-16 h-80 bg-[#0048B2] rotate-45 opacity-5 -left-20 "
            style={{ borderRadius: "75px" }}
          />
          <div className="pt-10  ">
            <div
              className=" relative w-16 h-96 bg-[#0048B2] left-8  opacity-5 -rotate-45  "
              style={{ borderRadius: "75px" }}
            />
            <div
              className=" relative -top-[268px] left-8 w-16 h-96 bg-[#0048B2]  opacity-5 rotate-45  "
              style={{ borderRadius: "75px" }}
            />
          </div>

          <div
            className="relative -top-[550px] w-16 h-80 bg-[#0048B2] -rotate-45 opacity-5 -left-20 "
            style={{ borderRadius: "75px" }}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
