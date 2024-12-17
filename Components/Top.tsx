// import React from "react";
// import Link from "next/link";
// import { GiHamburgerMenu } from "react-icons/gi";

// const Top = () => {
//   return (
//     <div className="w-screen h-[45px]  bg-[#272343] text-white text-[14px] font-[400]">
//       <div className=" flex items-center px-[300px] max-[1800px]:px-[150px] max-[1080px]:px-[75px] max-[650px]:px-[35px] py-[14px] justify-between">
//         <div className="flex gap-2">
//           <img src="/check.png" alt="check-icon" />
//           <p className="text-[13px] max-[550px]:text-[10px] font-[400] leading-[13.5px]">Free shipping on all orders over $50</p>
//         </div>
//         <div className="flex items-center gap-[24px] max-[550px]:hidden">
//         <p className="flex gap-[5px] text-[13px] font-[400] leading-[16.5px]">
//           English
//           <img src="/dropdown.svg" alt="dropdown" />
//         </p>
//         <Link href={"#"} className="text-[13px] font-[400] leading-[13.5px]">Faqs</Link>
//         <div className="flex gap-2 items-center justify-center">
//           <img src="/alert.svg" alt="alert" />
//         <Link href={"#"} className=" text-[13px]  font-[400] leading-[13.5px]">Need Help</Link>
//         </div>
//         </div>
//         <div className=" items-center justify-center max-[550px]:flex hidden">
//           <span className=""><GiHamburgerMenu /></span>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default Top;

import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Top = () => {
  return (
    <div className="w-screen h-[45px] bg-[#272343] text-white text-[14px] font-[400]">
      <div className="flex items-center px-[300px] max-1800:px-[150px] max-1080:px-[75px] max-650:px-[35px] py-[14px] justify-between">
        <div className="flex gap-2">
          <img src="/check.png" alt="check-icon" />
          <p className="text-[13px] max-550:text-[10px] font-[400] leading-[13.5px]">
            Free shipping on all orders over $50
          </p>
        </div>
        <div className="flex items-center gap-[24px] max-550:hidden">
          <p className="flex gap-[5px] text-[13px] font-[400] leading-[16.5px]">
            English
            <img src="/dropdown.svg" alt="dropdown" />
          </p>
          <Link href={"#"} className="text-[13px] font-[400] leading-[13.5px]">
            Faqs
          </Link>
          <div className="flex gap-2 items-center justify-center">
            <img src="/alert.svg" alt="alert" />
            <Link href={"#"} className="text-[13px] font-[400] leading-[13.5px]">
              Need Help
            </Link>
          </div>
        </div>
        <div className="items-center justify-center max-550:flex hidden">
          <span>
            <GiHamburgerMenu />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Top;