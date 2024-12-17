import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});
// const Contactus = () => {
//   return (
//     <div className="w-screen  px-[300px] py-[80px] max-[1800px]:px-[150px] max-[1080px]:px-[75px] max-[650px]:px-[35px]">
//       {/* Main Contact Section */}
//       <div className="max-w-5xl mx-auto py-10 px-4 flex items-center justify-center flex-col">
//         <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[54px] font-[600] text-center mb-2">
//           Get In Touch With Us
//         </h2>
//         <p
//           className={`text-gray-500 text-center mb-8 max-w-[90%] md:max-w-[70%] font-[400] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] ${poppins.className}`}
//         >
//           For More Information About Our Product & Services. Please Feel Free To
//           Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
//           Hesitate!
//         </p>

//         {/* Contact Details and Form */}
//         <div className="flex flex-col items-center lg:flex-row gap-10 lg:gap-[60px] w-full justify-between">
//           {/* Left Contact Details */}
//           <div className="flex flex-col mx-auto gap-[40px] lg:gap-[60px] w-full lg:w-1/3">
//             <div className="flex gap-4">
//               <img src="/address.png" className="w-[28px] h-[28px]" alt="Address" />
//               <div className="flex flex-col">
//                 <h6 className={`font-[600] text-[20px] leading-[30px] ${poppins.className}`}>
//                   Address
//                 </h6>
//                 <p className="font-[400] text-[14px] leading-[20px]">
//                   236 5th SE Avenue, New York NY10000, United States
//                 </p>
//               </div>
//             </div>
//             <div className="flex gap-4">
//               <img src="/phone.png" className="w-[28px] h-[28px]" alt="Phone" />
//               <div className="flex flex-col">
//                 <h6 className={`font-[600] text-[20px] leading-[30px] ${poppins.className}`}>
//                   Phone
//                 </h6>
//                 <p className="font-[400] text-[14px] leading-[20px]">
//                   Mobile: +(84) 546-6789
//                 </p>
//                 <p className="font-[400] text-[14px] leading-[20px]">
//                   Hotline: +(84) 456-6789
//                 </p>
//               </div>
//             </div>
//             <div className="flex gap-4">
//               <img src="/clock.png" className="w-[28px] h-[28px]" alt="Working Time" />
//               <div className="flex flex-col">
//                 <h6 className={`font-[600] text-[20px] leading-[30px] ${poppins.className}`}>
//                   Working Time
//                 </h6>
//                 <p className="font-[400] text-[14px] leading-[20px]">
//                   Monday-Friday: 9:00 - 22:00
//                 </p>
//                 <p className="font-[400] text-[14px] leading-[20px]">
//                   Saturday-Sunday: 9:00 - 21:00
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Contact Form */}
//           <div className="bg-white p-4 md:p-6 rounded-lg w-full lg:w-2/3 shadow-md">
//             <form className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className={`block text-[14px] md:text-[16px] font-[500] ${poppins.className}`}
//                 >
//                   Your name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
//                   placeholder="John Doe"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className={`block text-[14px] md:text-[16px] font-[500] ${poppins.className}`}
//                 >
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
//                   placeholder="email@example.com"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className={`block text-[14px] md:text-[16px] font-[500] ${poppins.className}`}
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
//                   placeholder="Hi! I'd like to ask about..."
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full md:w-[200px] bg-[#029FAE] text-white p-3 rounded-md hover:bg-[#3edceb]"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Specs Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-10 bg-[#F4F4F4] rounded-lg">
//         <div className="flex items-center gap-4">
//           <img src="/trophy.png" className="w-[40px]" alt="High Quality" />
//           <div>
//             <h6 className={`font-[600] text-[20px] ${poppins.className}`}>High Quality</h6>
//             <p className={`font-[500] text-[16px] ${poppins.className}`}>
//               Crafted from top materials
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center gap-4">
//           <img src="/tick.png" className="w-[40px]" alt="Warranty" />
//           <div>
//             <h6 className={`font-[600] text-[20px] ${poppins.className}`}>Warranty Protection</h6>
//             <p className={`font-[500] text-[16px] ${poppins.className}`}>Over 2 years</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-4">
//           <img src="/support.png" className="w-[40px]" alt="Support" />
//           <div>
//             <h6 className={`font-[600] text-[20px] ${poppins.className}`}>24/7 Support</h6>
//             <p className={`font-[500] text-[16px] ${poppins.className}`}>
//               Ready to assist anytime
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contactus;
const Contactus = () => {
  return (
    <div className="w-screen px-[300px] py-[80px] max-1800:px-[150px] max-1080:px-[75px] max-650:px-[35px]">
      {/* Main Contact Section */}
      <div className="max-w-5xl mx-auto py-10 px-4 flex items-center justify-center flex-col">
        <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[54px] font-[600] text-center mb-2">
          Get In Touch With Us
        </h2>
        <p
          className={`text-gray-500 text-center mb-8 max-w-[90%] md:max-w-[70%] font-[400] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] ${poppins.className}`}
        >
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>

        {/* Contact Details and Form */}
        <div className="flex flex-col items-center lg:flex-row gap-10 lg:gap-[60px] w-full justify-between">
          {/* Left Contact Details */}
          <div className="flex flex-col mx-auto gap-[40px] lg:gap-[60px] w-full lg:w-1/3">
            <div className="flex gap-4">
              <img src="/address.png" className="w-[28px] h-[28px]" alt="Address" />
              <div className="flex flex-col">
                <h6 className={`font-[600] text-[20px] leading-[30px] ${poppins.className}`}>
                  Address
                </h6>
                <p className="font-[400] text-[14px] leading-[20px]">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <img src="/phone.png" className="w-[28px] h-[28px]" alt="Phone" />
              <div className="flex flex-col">
                <h6 className={`font-[600] text-[20px] leading-[30px] ${poppins.className}`}>
                  Phone
                </h6>
                <p className="font-[400] text-[14px] leading-[20px]">
                  Mobile: +(84) 546-6789
                </p>
                <p className="font-[400] text-[14px] leading-[20px]">
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <img src="/clock.png" className="w-[28px] h-[28px]" alt="Working Time" />
              <div className="flex flex-col">
                <h6 className={`font-[600] text-[20px] leading-[30px] ${poppins.className}`}>
                  Working Time
                </h6>
                <p className="font-[400] text-[14px] leading-[20px]">
                  Monday-Friday: 9:00 - 22:00
                </p>
                <p className="font-[400] text-[14px] leading-[20px]">
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-white p-4 md:p-6 rounded-lg w-full lg:w-2/3 shadow-md">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-[14px] md:text-[16px] font-[500] ${poppins.className}`}
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`block text-[14px] md:text-[16px] font-[500] ${poppins.className}`}
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`block text-[14px] md:text-[16px] font-[500] ${poppins.className}`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Hi! I'd like to ask about..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-[200px] bg-[#029FAE] text-white p-3 rounded-md hover:bg-[#3edceb]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Specs Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-10 bg-[#F4F4F4] rounded-lg">
        <div className="flex items-center gap-4">
          <img src="/trophy.png" className="w-[40px]" alt="High Quality" />
          <div>
            <h6 className={`font-[600] text-[20px] ${poppins.className}`}>High Quality</h6>
            <p className={`font-[500] text-[16px] ${poppins.className}`}>
              Crafted from top materials
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img src="/tick.png" className="w-[40px]" alt="Warranty" />
          <div>
            <h6 className={`font-[600] text-[20px] ${poppins.className}`}>Warranty Protection</h6>
            <p className={`font-[500] text-[16px] ${poppins.className}`}>Over 2 years</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img src="/support.png" className="w-[40px]" alt="Support" />
          <div>
            <h6 className={`font-[600] text-[20px] ${poppins.className}`}>24/7 Support</h6>
            <p className={`font-[500] text-[16px] ${poppins.className}`}>
              Ready to assist anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;