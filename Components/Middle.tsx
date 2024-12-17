// import React from "react";
// import { DM_Sans } from "next/font/google";

// const dmsans = DM_Sans({ subsets: ['latin'] })

// const Middle = () => {
//   return (
//     <div className="w-screen bg-[#F0F2F3] max-[1800px]:px-[150px] max-[1080px]:px-[75px] max-[650px]:px-[35px] px-[300px] py-[20px] flex items-center justify-between ">
//       <div className="flex gap-3 items-center justify-center">
//         <img src="/logo.png" alt="logo" />
//         <p className="font-[500] text-[28px] leading-[31.2px] text-xl">Comforty</p>
//       </div>
//       <button className="w-[120px] h-[44px] max-[550px]:w-[80px] bg-[#ffffff] rounded-md flex items-center justify-center gap-[12px] max-[55px]:gap-[6px]">
//         <img src="/cart.png" className="invert max-[550px]:hidden" alt="cart" />
//         <p className="font-[500] text-[12px] leading-[13.2]">Cart</p>
//         <div className="h-[20px] w-[20px] bg-[#007580] text-white rounded-full flex items-center justify-center">
//           <p className={` ${dmsans.className} font-[500] text-[10px] leading-[10px]`}>2</p>
//         </div>
//       </button>
//     </div>
//   );
// };

// export default Middle;


import React from "react";
import { DM_Sans } from "next/font/google";

const dmsans = DM_Sans({ subsets: ['latin'] });

const Middle = () => {
  return (
    <div className="w-screen bg-[#F0F2F3] px-[300px] max-1800:px-[150px] max-1080:px-[75px] max-650:px-[35px] py-[20px] flex items-center justify-between">
      <div className="flex gap-3 items-center justify-center">
        <img src="/logo.png" alt="logo" />
        <p className="font-[500] text-[28px] leading-[31.2px] text-xl">Comforty</p>
      </div>
      <button className="w-[120px] h-[44px] max-550:w-[80px] bg-[#ffffff] rounded-md flex items-center justify-center gap-[12px] max-55:gap-[6px]">
        <img src="/cart.png" className="invert max-550:hidden" alt="cart" />
        <p className="font-[500] text-[12px] leading-[13.2]">Cart</p>
        <div className="h-[20px] w-[20px] bg-[#007580] text-white rounded-full flex items-center justify-center">
          <p className={`${dmsans.className} font-[500] text-[10px] leading-[10px]`}>2</p>
        </div>
      </button>
    </div>
  );
};

export default Middle;
