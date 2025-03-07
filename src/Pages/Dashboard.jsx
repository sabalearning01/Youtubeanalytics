import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Charts from "../Components/Charts";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Content", "Audience", "Trends"];

  return (
    <div className="ml-[254px] mt-[75px] bg-[#282828] min-h-full p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-white text-[25px] font-semibold">
          Channel analytics
        </h2>
        <button className="bg-[#0D0D0D] text-white text-[14px] px-4 py-2 rounded-3xl">
          Advanced mode
        </button>
      </div>

      {/* Tabs */}
      <div className="flex justify-between items-center mt-[22px]">
        <div className="flex gap-[33px] items-center">
          {tabs.map((tab) => (
            <h3
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[15px] font-semibold cursor-pointer transition-all ${
                activeTab === tab ? "text-white border-b-2 border-white pb-1" : "text-gray-400"
              }`}
            >
              {tab}
            </h3>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <h3 className="text-[#AAAAAA] text-[12px]">15 Jan - 11 Feb 2025</h3>
          <h3 className="text-white text-[15px]">Last 28 days</h3>
          <IoIosArrowDown className="text-white" />
        </div>
      </div>

      <hr className="text-[white] mt-[10px] opacity-10 w-full" />

      <h1 className="font-bold text-[28px] text-white mt-[26px]">
        Your channel didn’t get any views in the last 28 days
      </h1>

      <div className="flex justify-between ">
        <div className="w-[676px] h-[394px] border-1 border-white ml-[3px] opacity-70 mt-[25px] rounded-3xl ">
          <div className="flex justify-between items-center mt-[22px]">
            <div className="ml-[95px]">
              <h3 className="text-[white]  font-semibold ">Views</h3>
              <div className="h-1 w-6 bg-white opacity-100 mt-[19px] ml-2"></div>
            </div>
            <div>
              <h3 className="text-[white]">Watch Time(hours)</h3>
              <div className="h-1 w-6 bg-white opacity-100 mt-[19px] ml-12"></div>
            </div>
            <div className="mr-[79px]">
              <h3 className="text-[white]">Subscribers</h3>
              <div className="h-1 w-6 bg-white opacity-100 mt-[19px] ml-6"></div>
            </div>
          </div>
          
          <div className="w-[100%] h-[394px] mt-[30px] ml-[25px]">
            <Charts/>
            <button className="bg-[#000000] hover:bg-[#00000] hover:opacity-70 hover:text-white text-white rounded-3xl text-sm pt-3 pb-3 pl-4 pr-4 font-Roboto">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
