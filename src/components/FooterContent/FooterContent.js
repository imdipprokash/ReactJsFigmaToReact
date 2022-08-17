import React from "react";

const FooterContent = () => {
  return (
    <div className="flex bg-[#FFF] h-[51px] relative -bottom-8 px-6 justify-between  items-center overflow-x-hidden">
      <div className=" flex space-x-4 ">
        <h1 className=" text-black text-[12px]">Privacy Policy</h1>
        <h1 className="text-black text-[12px]">Terms of Use</h1>
      </div>
      <h1 className=" text-black text-[12px]">
        © 2022 Distronix UI, Made with ♥ by
        <span className=" text-[#3A57E8]"> Dipprokash Software developer</span>
      </h1>
    </div>
  );
};

export default FooterContent;
