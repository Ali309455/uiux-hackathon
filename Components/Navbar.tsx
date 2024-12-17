// import React from "react";
// import { GiHamburgerMenu } from "react-icons/gi";

// const Navbar = () => {
//   return (
//     <>
//       <div className="w-screen px-[300px] h-[74px] py-[14px] max-[1800px]:px-[150px] max-[1080px]:px-[75px] max-[650px]:px-[35px] border-b broder-[] justify-between flex  items-center gap-10 ">
//         <div className=" items-center justify-center max-[650px]:flex hidden">
//           <span className="">
//             <GiHamburgerMenu />
//           </span>
//         </div>
//         <ul className="flex gap-[32px] items-center max-[735px]:gap-[10px] max-[650px]:hidden ">
//           <li className="font-[500] text-[14px] leading-[15.4px] ">Home</li>
//           <li className="font-[500] text-[14px] leading-[15.4px] ">Shop</li>
//           <li className="font-[500] text-[14px] leading-[15.4px] ">Product</li>
//           <li className="font-[500] text-[14px] leading-[15.4px] ">Pages</li>
//           <li className="font-[500] text-[14px] leading-[15.4px] ">About</li>
//         </ul>
//         <div className="flex items-center gap-[8px]">
//           <p className="font-[400] text-[#636270] text-[14px] leading-[15.4px]">
//             Contact
//           </p>
//           <p className="font-[500] text-[14px] leading-[15.4px]">
//             (808) 555-0111
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <div className="w-screen px-[300px] h-[74px] py-[14px] max-1800:px-[150px] max-1080:px-[75px] max-650:px-[35px] border-b border-[#ccc] justify-between flex items-center gap-10">
        <div className="items-center justify-center max-650:flex hidden">
          <span>
            <GiHamburgerMenu />
          </span>
        </div>
        <ul className="flex gap-[32px] items-center max-735:gap-[10px] max-650:hidden">
          <li className="font-[500] text-[14px] leading-[15.4px]">Home</li>
          <li className="font-[500] text-[14px] leading-[15.4px]">Shop</li>
          <li className="font-[500] text-[14px] leading-[15.4px]">Product</li>
          <li className="font-[500] text-[14px] leading-[15.4px]">Pages</li>
          <li className="font-[500] text-[14px] leading-[15.4px]">About</li>
        </ul>
        <div className="flex items-center gap-[8px]">
          <p className="font-[400] text-[#636270] text-[14px] leading-[15.4px]">
            Contact
          </p>
          <p className="font-[500] text-[14px] leading-[15.4px]">
            (808) 555-0111
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;