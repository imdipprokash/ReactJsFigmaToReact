import React from "react";
import { FiSearch } from "react-icons/fi";
import flag from "../assets/flag.png";
import Bell from "../assets/Notification.svg";
import Inbox from "../assets/Group.png";
import Profile from "../assets/profile.jpg";

const Header = () => {
  return (
    <>
    <div className="px-4 py-1.5 bg-white flex  justify-between items-center shadow">
      {/* Search */}
      <div className="flex max-w-max items-center opacity-0.5 border-2 px-4 py-0.5 rounded-md">
        <FiSearch
          className="font-semibold"
          style={{ fontWeight: "boold" }}
          size={19}
          color="#ADB5BD"
        />
        <input className="px-2 outline-none " placeholder="Search..." />
      </div>
      <div>
        {/* flag */}
        <div className="flex space-x-4 items-center">
          <img src={flag} className=" h-8 w-8 object-fill rounded-full" />
          <img src={Bell} className="h-5 w-5" alt="SVG as an image"></img>
          <img src={Inbox} className="h-5 w-5" alt="image" />

          <img
            src={Profile}
            className="h-12 w-12 object-fill border-2 border-gray-300  rounded-full"
            alt="image"
          />
          {/* User dtls */}
          <div>
            <h2 className="text-xl font-semibold"> Distronix India</h2>
            <h2 className=" text-gray-500">Computers and Electronics</h2>
          </div>
        </div>
        
      </div>
    </div>
    
    </>
  );
};

export default Header;
