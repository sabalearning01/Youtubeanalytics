// import React from "react";
// import youtubeicon from "../assets/youtubeicon.png";
// import Ellip from "../assets/Ellip.png";
// import Create from "../assets/Create.png";
// import { IoIosMenu } from "react-icons/io";
// import { IoIosSearch } from "react-icons/io";
// import { GoQuestion } from "react-icons/go";
// import Ellip1 from "../assets/Ellip1.png";
// // import { CiCircleQuestion } from "react-icons/ci";

// const Header = () => {
//   return (
//     <div className="bg-[#282828] w-full h-[75px] flex items-center px-4 ">
//       {/* <hr className=" h-[2px] bg-[#0D0D0D] opacity-30" /> */}
//       {/* <hr className="w-[100%] mt-[80px] bg-[]"/> */}
//       <div className="flex justify-between items-center">
//         <div className="flex items-center gap-[10px]">
//           <IoIosMenu className="text-[white] text-3xl" />
//           <div className="flex ml-[20px]">
//             <img src={youtubeicon} />

//             <h2 className="font-[] text-[white] text-2xl">Studio</h2>
//           </div>
//         </div>

//         <div>
//           <div className="">
//             <input
//               className="w-[472px] h-[42px] ml-[246px]  text-[white] rounded-3xl bg-[black] pl-[50px]  relative"
//               type="text"
//               placeholder="Search across your channel"
//             />
//             <IoIosSearch className="absolute text-2xl top-[25px] right-[800px] text-[white] " />
//           </div>
//         </div>

//         <div className=" flex justify-between items-center gap-[20px] ml-[100px]">
//           <GoQuestion className="text-2xl text-[white]" />

//           <img clasName="object-contain" src={Create} alt="" />

//           <img clasName="object-contain" src={Ellip} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;



// import React from "react";
// import youtubeicon from "../assets/youtubeicon.png";
// import Ellip from "../assets/Ellip.png";
// import Create from "../assets/Create.png";
// import { IoIosMenu, IoIosSearch } from "react-icons/io";
// import { GoQuestion } from "react-icons/go";

// const Header = () => {
//   return (
//     <div className="fixed top-0 left-0 w-full h-[75px] bg-[#282828] flex items-center px-4 z-50">
//       <div className="flex justify-between items-center w-full">
//         {/* Left Section */}
//         <div className="flex items-center gap-[10px]">
//           <IoIosMenu className="text-white text-3xl" />
//           <div className="flex ml-[20px]">
//             <img src={youtubeicon} alt="YouTube Studio" />
//             <h2 className="text-white text-2xl">Studio</h2>
//           </div>
//         </div>

//         {/* Search Input */}
//         <div className="relative">
//           <input
//             className="w-[472px] h-[42px] text-white rounded-3xl bg-black pl-[50px]"
//             type="text"
//             placeholder="Search across your channel"
//           />
//           <IoIosSearch className="absolute text-2xl top-[10px] left-[15px] text-white" />
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-[20px]">
//           <GoQuestion className="text-2xl text-white" />
//           <img className="object-contain" src={Create} alt="Create" />
//           <img className="object-contain" src={Ellip} alt="Menu" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import youtubeicon from "../assets/youtubeicon.png";
import Ellip from "../assets/Ellip.png";
import Create from "../assets/Create.png";
import { IoIosMenu, IoIosSearch } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import pepicons1 from '../assets/pepicons1.png';
import blackguy1 from '../assets/blackguy1.png';


const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[75px] bg-[#282828] flex items-center px-4 z-50">
      <div className="flex justify-between items-center w-full">
        {/* Left Section */}
        <div className="flex items-center gap-[10px]">
          <IoIosMenu className="text-white text-3xl" />
          <div className="flex ml-[20px]">
            <img src={youtubeicon} alt="YouTube Studio" />
            <h2 className="text-white text-2xl">Studio</h2>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative">
          <input
            className="w-[472px] h-[42px] text-white rounded-3xl bg-black pl-[50px]"
            type="text"
            placeholder="Search across your channel"
          />
          <IoIosSearch className="absolute text-2xl top-[10px] left-[15px] text-white" />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-[20px]">
          <GoQuestion className="text-2xl text-white" />
          {/* <img className="object-contain" src={Create} alt="Create" /> */}
          <button className="flex  justify-between items-center gap-[10px] pt-[10px] pb-[10px] pl-[20px] pr-[20px] border-1 border-solid border-white opacity- rounded-full"><img className="object-contain" src={pepicons1}/><h3 className="text-white ">Create</h3></button>
          {/* <img className="object-contain" src={Ellip} alt="Menu" /> */}
          <img className="object-contain" src={blackguy1} alt="profile picture"/>
        </div>
      </div>

      {/* Line that appears across all components */}
      <hr className="h-[2px] bg-[#0D0D0D] opacity-30 drop-shadow-2xl w-full absolute bottom-0" />
    </div>
  );
};


export default Header;