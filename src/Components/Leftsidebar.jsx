

import React from "react";
import Ellipse3 from "../assets/Ellipse3.png";
import dashboardicon from "../assets/dashboardicon.png";
import contenticon from "../assets/contenticon.png";
import analyticsicon from "../assets/analyticsicon.png";
import communityicon from "../assets/communityicon.png";
import mdisettings from "../assets/mdisettings.png";
import feedbackicon from "../assets/feedbackicon.png";
import { PiSubtitlesLight, PiCopyrightLight } from "react-icons/pi";

const LeftSidebar = () => {
  return (
    <div className="fixed top-[75px] left-0 w-[254px] h-[calc(100vh-75px)] bg-[#282828] flex flex-col z-40">
      {/* Profile Section */}

       {/* Right Vertical Line (Separates Sidebar from Other Components) */}
       <div className="absolute right-0 top-0 h-full w-[2px] bg-[#ffff] opacity-5"></div>
      <div className="p-5">
        <img className="mx-auto mt-6" src={Ellipse3} alt="Profile" />
        <h1 className="mt-4 text-center text-base text-white">Your Channel</h1>
        <h1 className="mt-2 text-center text-[#aaaaaa] text-base">
          Saba Temitayo
        </h1>
      </div>

      {/* Sidebar Items */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-transparent">
        <div className="flex items-center ml-7 gap-2 mt-7 hover:bg-black cursor-pointer">
          <img src={dashboardicon} alt="Dashboard" />
          <h3 className="text-white">Dashboard</h3>
        </div>
        <div className="flex items-center ml-7 gap-2 mt-7 hover:bg-black cursor-pointer">
          <img src={contenticon} alt="Content" />
          <h3 className="text-white">Content</h3>
        </div>
        <div className="flex items-center ml-7 gap-2 mt-7 hover:bg-black cursor-pointer">
          <img src={analyticsicon} alt="Analytics" />
          <h3 className="text-white">Analytics</h3>
        </div>
        <div className="flex items-center ml-7 gap-2 mt-7 hover:bg-black cursor-pointer">
          <img src={communityicon} alt="Community" />
          <h3 className="text-white">Community</h3>
        </div>
        <div className="flex items-center ml-7 gap-2 mt-7 hover:bg-black cursor-pointer">
          <PiSubtitlesLight className="text-white text-2xl" />
          <h3 className="text-white">Subtitles</h3>
        </div>
        <div className="flex items-center ml-7 gap-2 mt-7 hover:bg-black cursor-pointer">
          <PiCopyrightLight className="text-white text-2xl" />
          <h3 className="text-white">Copyright</h3>
        </div>
      </div>

      {/* Settings & Feedback */}
      <div>
        <div className="flex items-center ml-7 gap-2 mt-7 hover:bg-black cursor-pointer">
          <img src={mdisettings} alt="Settings" />
          <h3 className="text-white">Settings</h3>
        </div>
        <div className="flex items-center ml-7 gap-2 mt-7 mb-5 hover:bg-black cursor-pointer">
          <img src={feedbackicon} alt="Feedback" />
          <h3 className="text-white">Feedback</h3>
        </div>
      </div>
      
    </div>
  );
};

export default LeftSidebar;
