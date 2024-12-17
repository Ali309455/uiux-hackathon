import React from "react";

const Header = () => {
  return (
    <div className="w-screen px-[300px] max-1800:px-[150px] max-1080:px-[75px] max-650:px-[35px] py-[20px]">
      <div className="h-[800px] bg-gray-200 overflow-x-hidden flex items-center justify-between relative">
        <img src="/headerbg.png" className="w-[434px] max-1400:w-[300px] absolute right-[65px]" alt="" />
        <div className="pl-[56px] z-[1] absolute bottom-[200px] w-[557px] flex flex-col gap-[32px]">
          <span className="flex items-center">
            <p className="text-[#272343] font-[400] text-[14px] leading-[14px]">
              WELOCOME TO CHAIRY
            </p>
          </span>
          <h2 className="text-[60px] text-[#272343] font-[700] leading-[66px] text-left w-[557px]">
            Best Furniture Collection For Your Interior.
          </h2>

          <button className="px-[24px] py-[14px] bg-[#029FAE] text-white w-1/3 flex items-center gap-2 ">
            Shop Now <img src="/arrow.png" className="" width={20} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;



