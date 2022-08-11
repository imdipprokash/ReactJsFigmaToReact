import React from "react";
import bannerImg from "../../assets/BannerIcons.svg";
import mic from "../../assets/Voice2.svg";
function BannerComponents() {
  return (
    <>
      <div className=" relative">
        <img
          src={bannerImg}
          className=" h-40 w-full object-cover rounded-b-lg"
          alt=""
        />
        <h1 className="  absolute top-3 text-3xl font-bold pl-8 text-white ">
          Hello Saroj !
        </h1>
        <h1 className="  absolute top-14 text-2xl  pl-8 text-white ">
          We are on a mission to help developers like you to build beautiful
          projects for free.
        </h1>
        <div
          className=" absolute w-48 rounded-lg h-10 right-10 top-4 flex items-center px-4 space-x-4"
          style={{ backgroundColor: "#3A57E8" }}
        >
          <img src={mic} alt="" />
          <h1 className="text-white"> Announcments</h1>
        </div>
      </div>
    </>
  );
}

export default BannerComponents;

// " text-white font-semibold left-2"
