// import React from "react";
// import Card from "@/Components/Card";

// const page = () => {
//   const products = [
//     {
//       desc: "Library Stool Chair",
//       price: "$20",
//       imgSrc: "/chair1.png", // Replace with the actual image path
//       isActive: true,
//       featured: null,
//       forsinglepage: true,
//     },
//     {
//       desc: "Library Stool Chair",
//       price: "$20",
//       oldprice: "$30",
//       imgSrc: "/chair2.png", // Replace with the actual image path
//       isActive: false,
//       featured: null,
//       forsinglepage: true,
//     },
//     {
//       desc: "Library Stool Chair",
//       price: "$20",
//       imgSrc: "/chair3.png", // Replace with the actual image path
//       isActive: false,
//       featured: null,
//       forsinglepage: true,
//     },
//     {
//       desc: "Library Stool Chair",
//       price: "$20",
//       imgSrc: "/chair4.png", // Replace with the actual image path
//       isActive: false,
//       featured: null,
//       forsinglepage: true,
//     },
//     {
//       desc: "Library Stool Chair",
//       price: "$20",
//       imgSrc: "/chair5.png", // Replace with the actual image path
//       isActive: false,
//       featured: null,
//       forsinglepage: true,
//     },
//   ];
//   return (
//     // <div className="w-screen px-[260px] pt-[132px] pb-[141px]">
//     //   <div className="flex  justify-between gap-[109px]">
//     //     <div className="">
//     //       <img
//     //         src="/librarystoolchair.png"
//     //         alt="product-image"
//     //         className="w-[]"
//     //       />
//     //     </div>
//     //     <div className="flex flex-col gap-[45px] ">
//     //       <div className="pb-[50px] border-b border-gray-600 flex flex-col gap-[45px]">
//     //         <h2 className="text-[60px] leading-[66px] font-[700] w-[541px]">
//     //           Library Stool Chair
//     //         </h2>
//     //         <div className="px-[10px] py-[6px] rounded-3xl w-fit flex items-center justify-center font-[400] text-white text-[20px] leading-[22px] bg-[#029FAE] ">
//     //           $20.00 USD{" "}
//     //         </div>
//     //       </div>
//     //       <div className=" flex flex-col gap-[53px]">
//     //         <p className="w-[543px] font-[400] text-[22px] leading-[33px] text-gray-500">
//     //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
//     //           tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
//     //           adipiscing
//     //         </p>
//     //         <button className="px-[24px] py-[14px] w-fit rounded-[8px] bg-[#029FAE] flex items-center gap-3">
//     //           <img src="/cart.png" alt="cart" width={40} className="" />
//     //           <p className="font-[600] text-[20px] leading-[22px] text-white">
//     //             Add To Cart
//     //           </p>
//     //         </button>
//     //       </div>
//     //     </div>
//     //   </div>
//     //   <div className="">
//     //     <div className="pb-[45px] flex items-center justify-between">
//     //       <h3 className="text-[32px] leading-[35.2px] font-[600]">
//     //         Featured Products
//     //       </h3>
//     //       <button className="mr-[45px] h-[32px] flex items-center font-[700] justify-center border-b-2 border-black">
//     //           View all
//     //         </button>
//     //     </div>
//     //     <div className="grid grid-cols-4 gap-[24px]">
//     //       {products.map((item, index) => (
//     //         <Card key={index} product={item} />
//     //       ))}
//     //     </div>
//     //   </div>
//     // </div>
//     <div className="w-full  px-[300px] py-[80px] max-[1800px]:px-[150px] max-[1080px]:px-[75px] max-[650px]:px-[35px]">
//       {/* Product Display Section */}
//       <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
//         <div className="lg:w-1/2 flex justify-center">
//           <img
//             src="/librarystoolchair.png"
//             alt="product-image"
//             className="max-w-full h-auto"
//           />
//         </div>
//         <div className="lg:w-1/2 flex flex-col gap-10">
//           <div className="pb-6 border-b border-gray-300 flex flex-col gap-6">
//             <h2 className="text-3xl sm:text-5xl font-bold">
//               Library Stool Chair
//             </h2>
//             <div className="px-4 py-2 rounded-3xl w-fit bg-[#029FAE] text-white text-lg sm:text-xl font-medium">
//               $20.00 USD
//             </div>
//           </div>
//           <div className="flex flex-col gap-8">
//             <p className="text-base sm:text-lg lg:text-xl text-gray-500 leading-7">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
//               tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
//               adipiscing
//             </p>
//             <button className="px-6 py-4 w-1/3 max-[1400px]:w-full rounded-md bg-[#029FAE] flex items-center gap-3 hover:bg-[#027c8b] transition">
//               <img src="/cart.png" alt="cart" className="" width={24} />
//               <p className="text-lg font-semibold text-white">Add To Cart</p>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Featured Products Section */}
//       <div className="mt-16">
//         <div className="flex items-center justify-between pb-6">
//           <h3 className="text-xl sm:text-2xl font-semibold">
//             Featured Products
//           </h3>
//           <button className="text-base sm:text-lg font-bold border-b-2 border-black hover:text-gray-700">
//             View all
//           </button>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 max-[1930px]:grid-cols-3  gap-6">
//           {products.map((item, index) => (
//             <Card key={index} product={item} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;


import React from "react";
import Card from "@/Components/Card";

const page = () => {
  const products = [
    {
      desc: "Library Stool Chair",
      price: "$20",
      imgSrc: "/chair1.png", // Replace with the actual image path
      isActive: true,
      featured: null,
      forsinglepage: true,
    },
    {
      desc: "Library Stool Chair",
      price: "$20",
      oldprice: "$30",
      imgSrc: "/chair2.png", // Replace with the actual image path
      isActive: false,
      featured: null,
      forsinglepage: true,
    },
    {
      desc: "Library Stool Chair",
      price: "$20",
      imgSrc: "/chair3.png", // Replace with the actual image path
      isActive: false,
      featured: null,
      forsinglepage: true,
    },
    {
      desc: "Library Stool Chair",
      price: "$20",
      imgSrc: "/chair4.png", // Replace with the actual image path
      isActive: false,
      featured: null,
      forsinglepage: true,
    },
    {
      desc: "Library Stool Chair",
      price: "$20",
      imgSrc: "/chair5.png", // Replace with the actual image path
      isActive: false,
      featured: null,
      forsinglepage: true,
    },
  ];

  return (
    <div className="w-full px-[300px] py-[80px] max-1800:px-[150px] max-1080:px-[75px] max-650:px-[35px]">
      {/* Product Display Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/librarystoolchair.png"
            alt="product-image"
            className="max-w-full h-auto"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-10">
          <div className="pb-6 border-b border-gray-300 flex flex-col gap-6">
            <h2 className="text-3xl sm:text-5xl font-bold">
              Library Stool Chair
            </h2>
            <div className="px-4 py-2 rounded-3xl w-fit bg-[#029FAE] text-white text-lg sm:text-xl font-medium">
              $20.00 USD
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-base sm:text-lg lg:text-xl text-gray-500 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
              adipiscing.
            </p>
            <button className="px-6 py-4 w-1/3 max-1400:w-full rounded-md bg-[#029FAE] flex items-center gap-3 hover:bg-[#027c8b] transition">
              <img src="/cart.png" alt="cart" className="" width={24} />
              <p className="text-lg font-semibold text-white">Add To Cart</p>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="mt-16">
        <div className="flex items-center justify-between pb-6">
          <h3 className="text-xl sm:text-2xl font-semibold">Featured Products</h3>
          <button className="text-base sm:text-lg font-bold border-b-2 border-black hover:text-gray-700">
            View all
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 max-1930:grid-cols-3 gap-6">
          {products.map((item, index) => (
            <Card key={index} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
