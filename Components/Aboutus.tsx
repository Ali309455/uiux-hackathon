// import React from "react";

// const Aboutus = () => {
//   const datas = [
//     {
//       imgsrc: "/abouticon1.png",
//       maindesc: "Next day as standard",
//       desc: "Order before 3pm and get your order the next day as standard",
//     },
//     {
//       imgsrc: "/abouticon2.png",
//       maindesc: "Made by true artisans",
//       desc: "Handmade crafted goods made with real passion and craftsmanship",
//     },
//     {
//       imgsrc: "/abouticon3.png",
//       maindesc: "Unbeatable prices",
//       desc: "For our materials and quality, you won’t find better prices anywhere",
//     },
//     {
//       imgsrc: "/abouticon4.png",
//       maindesc: "Recycled packaging",
//       desc: "We use 100% recycled to ensure our footprint is more manageable",
//     },
//   ];

//   return (
//     <div className="w-screen px-[300px] max-[1800px]:px-[150px] max-[1080px]:px-[75px] max-[650px]:px-[35px] py-[80px]">
//       <div className="flex items-center justify-between max-[950px]:flex-col">
//         <div className="flex flex-col gap-[20px] h-[419px] w-[624px] items-start pl-10 max-[550px]:pl-5 py-8  max-[650px]:w-[90vw]  bg-[#007580]">
//           <h4 className="font-[700] text-[32px] max-[450px]:text-[24px] leading-[37px] text-white">
//             About Us - Comforty
//           </h4>
//           <p className="w-[70%] text-white font-[400] text-[18px]  max-[415px]:text-[13px] max-[415px]:w-[85vw] leading-[22px]">
//             At Comforty, we believe that the right chair can transform your
//             space and elevate your comfort. Specializing in ergonomic design,
//             premium materials, and modern aesthetics, we craft chairs that
//             seamlessly blend style with functionality.
//           </p>
//           <button className=" px-[32px] py-[16px] mt-auto bg-[#F9F9F926] font-[400] text-[16px] max-[415px]:text-[13px] leading-[24px] text-white">
//             View Collection
//           </button>
//         </div>
//         <div className="w-[624px] h-[419px] bg-[url('/aboutchair.png')] max-[650px]:w-[90vw] bg-cover bg-no-repeat bg-center overflow-hidden"></div>
//       </div>
//       <div className=" py-[132px]">
//         <h3 className="text-center font-[600] text-[32px] max-[450px]:text-[24px]   ">
//           What Makes Our Brand Different
//         </h3>
//         <div className="grid w-fit gap-6 mx-auto grid-cols-4 max-[1585px]:grid-cols-2 max-[550px]:grid-cols-1 content-center justify-center">
//           {datas.map((data, index) => (
//             <div
//               key={index}
//               className="p-[48px] flex flex-col gap-[10px] w-fit max-[550px]:w-[80vw]  max-[802px]:p-[32px] max-[450px]:p-[20px] bg-[#F9F9F9]"
//             >
//               <img src={data.imgsrc} alt="icon" width={24} />
//               <p className="font-[400] text-[20px] leading-[28px]  text-[#007580]">
//                 {data.maindesc}
//               </p>
//               <p className="font-[400] text-[16px] max-[415px]:text-[13px] leading-[24px] text-[#007580] w-[213px]">
//                 {data.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className=" py-[132px]">
//         <h3 className="text-left max-[1285px]:text-center font-[600] text-[32px]  max-[450px]:text-[24px]  pb-[40px]   ">
//           Our Popular Products
//         </h3>
//         <div className="flex items-center gap-[28px] max-[1285px]:flex-col justify-between">
//           <div className=" flex flex-col gap-[10px] w-fit ">
//             <img src="/aboutimage1.png" alt="product" />
//             <div className="flex flex-col gap-[15px]">
//               <p className="font-[400] text-[20px] leading-[28px]  max-[450px]:text-[16px] ">
//                 The Popular suede sofa
//               </p>
//               <p className="font-[400] text-[16px] leading-[24px]  w-[213px]">
//                 99.00
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center gap-[28px]">
//             <div className=" flex flex-col gap-[10px] w-fit ">
//               <img
//                 src="/aboutimage2.png"
//                 className="max-[450px]:w-[150px]"
//                 alt="product"
//               />
//               <div className="flex flex-col gap-[15px] max-[450px]:gap-[7px]">
//                 <p className="font-[400] text-[20px] leading-[28px] max-[450px]:text-[16px] ">
//                   The Popular suede sofa
//                 </p>
//                 <p className="font-[400] text-[16px] leading-[24px]  w-[213px] max-[450px]:w-fit">
//                   99.00
//                 </p>
//               </div>
//             </div>
//             <div className=" flex flex-col gap-[10px] max-[450px]:gap-[5px] w-fit ">
//               <img
//                 src="/aboutimage3.png"
//                 className="max-[450px]:w-[150px]"
//                 alt="product"
//               />
//               <div className="flex flex-col gap-[15px] max-[450px]:gap-[7px]">
//                 <p className="font-[400] text-[20px] leading-[28px] max-[450px]:text-[16px] ">
//                   The Popular suede sofa
//                 </p>
//                 <p className="font-[400] text-[16px] leading-[24px]  w-[213px] max-[450px]:w-fit">
//                   99.00
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Aboutus;

import React from "react";

const Aboutus = () => {
  const datas = [
    {
      imgsrc: "/abouticon1.png",
      maindesc: "Next day as standard",
      desc: "Order before 3pm and get your order the next day as standard",
    },
    {
      imgsrc: "/abouticon2.png",
      maindesc: "Made by true artisans",
      desc: "Handmade crafted goods made with real passion and craftsmanship",
    },
    {
      imgsrc: "/abouticon3.png",
      maindesc: "Unbeatable prices",
      desc: "For our materials and quality, you won’t find better prices anywhere",
    },
    {
      imgsrc: "/abouticon4.png",
      maindesc: "Recycled packaging",
      desc: "We use 100% recycled to ensure our footprint is more manageable",
    },
  ];

  return (
    <div className="w-screen px-[300px] max-1800:px-[150px] max-1080:px-[75px] max-650:px-[35px] py-[80px]">
      <div className="flex items-center justify-between max-950:flex-col">
        <div className="flex flex-col gap-[20px] h-[419px] w-[624px] items-start pl-10 max-550:pl-5 py-8 max-650:w-[90vw] bg-[#007580]">
          <h4 className="font-[700] text-[32px] max-450:text-[24px] leading-[37px] text-white">
            About Us - Comforty
          </h4>
          <p className="w-[70%] text-white font-[400] text-[18px] max-415:text-[13px] max-415:w-[85vw] leading-[22px]">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
          <button className="px-[32px] py-[16px] mt-auto bg-[#F9F9F926] font-[400] text-[16px] max-415:text-[13px] leading-[24px] text-white">
            View Collection
          </button>
        </div>
        <div className="w-[624px] h-[419px] bg-[url('/aboutchair.png')] max-650:w-[90vw] bg-cover bg-no-repeat bg-center overflow-hidden"></div>
      </div>
      <div className="py-[132px]">
        <h3 className="text-center font-[600] text-[32px] max-450:text-[24px]">
          What Makes Our Brand Different
        </h3>
        <div className="grid w-fit gap-6 mx-auto grid-cols-4 max-1585:grid-cols-2 max-550:grid-cols-1 content-center justify-center">
          {datas.map((data, index) => (
            <div
              key={index}
              className="p-[48px] flex flex-col gap-[10px] w-fit max-550:w-[80vw] max-802:p-[32px] max-450:p-[20px] bg-[#F9F9F9]"
            >
              <img src={data.imgsrc} alt="icon" width={24} />
              <p className="font-[400] text-[20px] leading-[28px] text-[#007580]">
                {data.maindesc}
              </p>
              <p className="font-[400] text-[16px] max-415:text-[13px] leading-[24px] text-[#007580] w-[213px]">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="py-[132px]">
        <h3 className="text-left max-1285:text-center font-[600] text-[32px] max-450:text-[24px] pb-[40px]">
          Our Popular Products
        </h3>
        <div className="flex items-center gap-[28px] max-1285:flex-col justify-between">
          <div className="flex flex-col gap-[10px] w-fit">
            <img src="/aboutimage1.png" alt="product" />
            <div className="flex flex-col gap-[15px]">
              <p className="font-[400] text-[20px] leading-[28px] max-450:text-[16px]">
                The Popular suede sofa
              </p>
              <p className="font-[400] text-[16px] leading-[24px] w-[213px]">
                99.00
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[28px]">
            <div className="flex flex-col gap-[10px] w-fit">
              <img
                src="/aboutimage2.png"
                className="max-450:w-[150px]"
                alt="product"
              />
              <div className="flex flex-col gap-[15px] max-450:gap-[7px]">
                <p className="font-[400] text-[20px] leading-[28px] max-450:text-[16px]">
                  The Popular suede sofa
                </p>
                <p className="font-[400] text-[16px] leading-[24px] w-[213px] max-450:w-fit">
                  99.00
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] max-450:gap-[5px] w-fit">
              <img
                src="/aboutimage3.png"
                className="max-450:w-[150px]"
                alt="product"
              />
              <div className="flex flex-col gap-[15px] max-450:gap-[7px]">
                <p className="font-[400] text-[20px] leading-[28px] max-450:text-[16px]">
                  The Popular suede sofa
                </p>
                <p className="font-[400] text-[16px] leading-[24px] w-[213px] max-450:w-fit">
                  99.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;