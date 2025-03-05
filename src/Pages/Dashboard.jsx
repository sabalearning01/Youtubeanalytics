// import React from "react";
// import { IoIosArrowDown } from "react-icons/io";

// const Dashboard = () => {
//   return (
//     <div className="bg-[#282828] w-[100%] h-[100%]">
//       <hr className=" h-[2px] bg-[#0D0D0D] opacity-30 drop-shadow-2xl" />

//       <div className="flex justify-between items-center">
//         <h2 className="text-[white] text-[25px] font-semi-bold mt-[38px] ml-[28px]">
//           Channel analytics
//         </h2>
//         <button className="bg-[#0D0D0D] text-[white] mr-[25px] text-[14px] pt-[10px] pl-[10px] pr-[10px] pb-[10px] rounded-3xl ">
//           Advanced mode
//         </button>
//       </div>
//       <div className="flex justify-between items-center ml-[30px] mt-[22px]">
//         <div className="flex gap-[33px] items-center">
//           <h3 className=" font-semibold text-[15px] text-[white]">Overview</h3>
//           <h3 className="text-[15px] font-semibold  text-[white]">Content</h3>
//           <h3 className="font-semibold text-[15px] text-[white]">Audience</h3>
//           <h3 className="font-semibold text-[15px] text-[white]">Trends</h3>
//         </div>
//         <div className="flex mr-[21px]  ">
//           <div className="">
//             <h3 className="text-[#AAAAAA] text-[12px]">15 Jan - 11 Feb 2025</h3>
//             <h3 className="text-[white] text-[15px]">Last 28days</h3>
//           </div>
//           <IoIosArrowDown className="text-[white] mt-[15px] ml-[50px]" />
//         </div>
//       </div>
//       <hr className="text-[white] mt-[10px] opacity-10" />

//       <h1 className="font-bold text-[28px] text-white ml-[28px] mt-[26px]">
//         Your channel didn’t get any views in the last 28 days
//       </h1>
//       <div className="flex justify-between ">
//         <div className="w-[676px] h-[394px] border-1 border-white ml-[28px] opacity-10 mt-[25px] rounded-3xl ">
//           <div className="flex justify-between items-center mt-[22px]">
//           <div className="ml-[95px]">
//             <h3 className="text-[white]  font-semibold ">Views</h3>
//           </div>
//           <div>
//             <h3 className="text-[white]">Watch Time(hours)</h3>
//           </div>
//           <div className="mr-[79px]">
//             <h3 className="text-[white]">Subscribers</h3>
//           </div>
//         </div>
//         </div>
//         <div className="w-[261px] h-[374px] border-1 border-white ml-[28px] opacity-10 mb-[250px] rounded-3xl mr-[28px] "></div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Charts from "../Components/Charts";

const Dashboard = () => {
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
          <h3 className="text-white font-semibold text-[15px]">Overview</h3>
          <h3 className="text-white font-semibold text-[15px]">Content</h3>
          <h3 className="text-white font-semibold text-[15px]">Audience</h3>
          <h3 className="text-white font-semibold text-[15px]">Trends</h3>
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
          <div className="w-[100%] h-[394px] mt-[30px]"><Charts/></div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Dashboard;
