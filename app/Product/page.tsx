import React from "react";
import Card from "@/Components/Card";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const page = () => {
  const products = [
    {
      desc: "Library Stool Chair",
      price: "$20",
      imgSrc: "chair2.png",
      isActive: true,
      featured: { tag: "New", color: "#01AD5A" },
    },
    {
      desc: "Library Stool Chair",
      price: "$20",
      imgSrc: "librarystoolchair.png",
      isActive: true,
      oldprice: "$25",
      featured: { tag: "Sale", color: "#F16649" },
    },
    {
      desc: "Library Stool Chair",
      price: "$20",
      imgSrc: "chair4.png",
      isActive: true,
    },
    {
      desc: "Library Stool Chair",
      price: "$20",
      imgSrc: "chair6.png",
      isActive: true,
    },
    {
      desc: "Library Stool Chair",
      price: "$20",
      imgSrc: "chair7.png",
      isActive: true,
      featured: { tag: "New", color: "#01AD5A" },
    },
    {
      desc: "Library Stool Chair",
      price: "$20",
      imgSrc: "categorychair4.png",
      isActive: true,
      oldprice: "$25",
      featured: { tag: "Sale", color: "#F16649" },
    },
    {
      desc: "Library Stool Chair",
      price: "$20",
      imgSrc: "chair1.png",
      isActive: true,
    },
    {
      desc: "Library Stool Chair",
      price: "$20",
      imgSrc: "chair2.png",
      isActive: true, 
    },
    {
      desc: "Library Stool Chair",
      price: "$20",
      imgSrc: "chair1.png",
      isActive: true, 
    },
    {
      desc: "Library Stool Chair",
      price: "$20",
      imgSrc: "librarystoolchair.png",
      isActive: true,
      oldprice: "$25",
      featured: { tag: "Sale", color: "#F16649" },
    },
    {
      desc: "Library Stool Chair",
      price: "$20",
      imgSrc: "chair4.png",
      isActive: true,
    },
    {
      desc: "Library Stool Chair",
      price: "$20",
      imgSrc: "chair3.png",
      isActive: true,
    },
  ];
  
  return (
    // <>
    //   <div className="w-screen px-[300px] py-[40px] ">
    //     {/* Heading */}
    //     <div className="pb-[45px]">
    //       <h3 className="text-[32px] leading-[35.2px] font-[600] text-center pb-[74px]">
    //         Our Products
    //       </h3>
    //     </div>
    //     <div className="grid grid-cols-4 pb-[173px] gap-[24px]">
    //       {products.map((item, index) => (
    //         <Card key={index} product={item} />
    //       ))}
    //     </div>
    //   </div>
    //   <div className="w-screen px-[300px] py-[100px] bg-[#1E28320D]" >
    //     <div className="w-[760px] mx-auto mb-[70px] flex items-center justify-center flex-col gap-[74px]">
    //       <h2 className={`w-full text-center ${roboto.className} text-[50px] leading-[58.5px] font-[600]` }>Or Subscribe To The Newsletter</h2>
    //       <form action="" className="flex w-full justify-between items-center gap-[26px] ">
    //         <input type="text" placeholder="Email Address..." className="h-[32px] w-[74%] pl-4 border-b-2 border-black"  />
    //         <button className="w-[25%] h-[32px] flex items-center justify-center border-b-2 border-black">
    //           SUBMIT
    //         </button>
    //       </form>
    //     </div>
    //     <div className="flex flex-col gap-[60px]">
    //       <h2 className={`w-full text-center ${roboto.className} text-[50px] leading-[58.5px] font-[600]` }>Follow Products And Discounts On Instagram</h2>
    //       <div className="flex items-center justify-between gap-[24px]">
    //         <img src="/chair1.png" className="w-[186px] h-[186px] rounded-[6px] bg-cover" alt="chair" />
    //         <img src="/chair1.png" className="w-[186px] h-[186px] rounded-[6px] bg-cover" alt="chair" />
    //         <img src="/chair1.png" className="w-[186px] h-[186px] rounded-[6px] bg-cover" alt="chair" />
    //         <img src="/chair1.png" className="w-[186px] h-[186px] rounded-[6px] bg-cover" alt="chair" />
    //         <img src="/chair1.png" className="w-[186px] h-[186px] rounded-[6px] bg-cover" alt="chair" />
    //         <img src="/chair1.png" className="w-[186px] h-[186px] rounded-[6px] bg-cover" alt="chair" />
    //       </div>
    //     </div>
    //   </div>
    // </>
    <div className="px-[300px] max-1800:px-[150px] max-1080:px-[75px] max-650:px-[35px] py-[20px]">
      <div className="w-full  py-10">
        {/* Heading */}
        <div className="pb-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold">Our Products</h3>
        </div>
        <div className="grid max-750:grid-cols-1 max-1285:grid-cols-2 max-1930:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {products.map((item, index) => (
            <Card key={index} product={item} />
          ))}
        </div>
      </div>

      <div className="w-full px-4 md:px-12 lg:px-24 py-10 bg-[#1E28320D]">
        {/* Newsletter Section */}
        <div className="w-full max-w-3xl mx-auto mb-12 flex flex-col items-center gap-8">
          <h2
            className={`text-center ${roboto.className} text-2xl sm:text-3xl lg:text-4xl font-semibold`}
          >
            Or Subscribe To The Newsletter
          </h2>
          <form
            action=""
            className="flex flex-col sm:flex-row w-full gap-4 items-center"
          >
            <input
              type="text"
              placeholder="Email Address..."
              className="h-10 w-full sm:w-3/4 px-4 border-b-2 bg-transparent border-black"
            />
            <button className="w-full sm:w-1/4 h-10 flex items-center justify-center border-b-2 border-black">
              SUBMIT
            </button>
          </form>
        </div>

        {/* Instagram Section */}
        <div className="flex flex-col gap-12">
          <h2
            className={`text-center ${roboto.className} text-2xl sm:text-3xl lg:text-4xl font-semibold`}
          >
            Follow Products And Discounts On Instagram
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <img
              src="/chair1.png"
              className="w-[186px] h-[186px] rounded-[6px] bg-cover"
              alt="chair"
            />
            <img
              src="/chair2.png"
              className="w-[186px] h-[186px] rounded-[6px] bg-cover"
              alt="chair"
            />
            <img
              src="/chair3.png"
              className="w-[186px] h-[186px] rounded-[6px] bg-cover"
              alt="chair"
            />
            <img
              src="/librarystoolchair.png"
              className="w-[186px] h-[186px] rounded-[6px] bg-cover"
              alt="chair"
            />
            <img
              src="/chair4.png"
              className="w-[186px] h-[186px] rounded-[6px] bg-cover"
              alt="chair"
            />
            <img
              src="/chair5.png"
              className="w-[186px] h-[186px] rounded-[6px] bg-cover"
              alt="chair"
            />
          </div>
        </div>
      </div>
      </div>
  );
};

export default page;
