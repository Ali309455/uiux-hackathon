import React from "react";

const Cart = () => {
  return (
    // <div className="w-screen px-[300px] py-[60px] flex gap-[63px] justify-between">
    //   <div className=" flex flex-col gap-[32px]">
    //     <div className="flex gap-5 w-[40vw] items-center justify-between">
    //       <img
    //         src="/categorychair1.png"
    //         className="w-[150px] h-[150px] bg-cover"
    //         alt=""
    //       />
    //       <div className="flex flex-col w-full ">
    //         <div className="flex items-center justify-between">
    //           <h4 className="font-[400] text-[16px] leading-[21px] text-gray-700">
    //             Library Stool Chair
    //           </h4>
    //           <p className="">MRP: $99</p>
    //         </div>
    //         <div className="">
    //           <p className="font-[400] text-[15px] leading-[28px] text-[#757575]">
    //             Ashen Slate/Cobalt Bliss
    //           </p>
    //           <div className="flex items-center justify-between">
    //             <p className="font-[400] text-[15px] leading-[28px] text-[#757575]">size: L</p>
    //             <p className="font-[400] text-[15px] leading-[28px] text-[#757575]">
    //               Quantity: 1
    //             </p>
    //           </div>
    //           <div className="">
    //             <img src="/" alt="" />
    //             <img src="/" alt="" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex gap-5 w-[40vw] items-center justify-between">
    //       <img
    //         src="/categorychair1.png"
    //         className="w-[150px] h-[150px] bg-cover"
    //         alt=""
    //       />
    //       <div className="flex flex-col w-full ">
    //         <div className="flex items-center justify-between">
    //           <h4 className="font-[400] text-[16px] leading-[21px] text-gray-700">
    //             Library Stool Chair
    //           </h4>
    //           <p className="">MRP: $99</p>
    //         </div>
    //         <div className="">
    //           <p className="font-[400] text-[15px] leading-[28px] text-[#757575]">
    //             Ashen Slate/Cobalt Bliss
    //           </p>
    //           <div className="flex items-center justify-between">
    //             <p className="font-[400] text-[15px] leading-[28px] text-[#757575]">size: L</p>
    //             <p className="font-[400] text-[15px] leading-[28px] text-[#757575]">
    //               Quantity: 1
    //             </p>
    //           </div>
    //           <div className="">
    //             <img src="/" alt="" />
    //             <img src="/" alt="" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="w-[19vw]">
    //     <div className=" px-[4px] py-[17px] flex flex-col gap-[25px] border-b border-gray-400">
    //       <p className="text-[21px] leading-[33px] font-[500] ">Summary</p>
    //       <div className="flex flex-col gap-[8px]">
    //       <div className="flex items-center justify-between">
    //         <p className="text-[15px] leading-[21px] font-[400]">Subtotal</p>
    //         <p className="text-[15px] leading-[21px] font-[400]">$198.09</p>
    //       </div>
    //       <div className="flex items-center justify-between">
    //         <p className="text-[15px] leading-[21px] font-[400]">Extimated Delievery & Handling</p>
    //         <p className="text-[15px] leading-[21px] font-[400]">Free</p>
    //       </div>
    //       </div>
    //     </div>
    //     <div className="px-[4px] py-[17px] border-b border-gray-400">
    //       <div className="flex items-center justify-between">
    //         <p className="">Total</p>
    //         <p className="">$198.00</p>
    //       </div>
    //     </div>
    //     <div className="px-3 py-8 ">
    //       <button className="px-[100px] py-[18px] bg-[#029FAE]  text-white rounded-[30px] ">Member Checkout</button>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full px-[300px] py-[80px] max-[1800px]:px-[150px] max-[1080px]:px-[75px] max-[650px]:px-[35px] flex flex-col lg:flex-row gap-8">
      {/* Cart Items Section */}
      <div className="flex-1 flex flex-col gap-6">
        {[1, 2].map((_, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-gray-300 pb-4"
          >
            {/* Product Image */}
            {/* <img
              src="/categorychair1.png"
              className="w-32 h-32 max-[550px]:w-[70vw] sm:w-40 sm:h-40 object-cover rounded-md"
              alt="Chair"
            /> */}
            <div className="w-32 h-32 bg-[url('/categorychair1.png')] max-[650px]:w-[90vw] max-[450px]:w-[81vw] max-[650px]:h-[250px] bg-cover bg-no-repeat bg-center overflow-hidden"></div>
            {/* Product Info */}
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-medium text-gray-800">
                  Library Stool Chair
                </h4>
                <p className="text-gray-700 font-semibold">MRP: $99</p>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Ashen Slate / Cobalt Bliss
              </p>
              <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                <p>Size: L</p>
                <p>Quantity: 1</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="w-full lg:w-1/3">
        {/* Summary Box */}
        <div className=" p-6 rounded-lg ">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Summary</h3>
          <div className="flex justify-between text-gray-700 mb-2">
            <p>Subtotal</p>
            <p>$198.09</p>
          </div>
          <div className="flex justify-between text-gray-700 mb-2">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>
          <div className="border-t border-gray-300 my-4"></div>
          <div className="flex justify-between text-lg font-semibold text-gray-800">
            <p>Total</p>
            <p>$198.00</p>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="mt-6 flex justify-center">
          <button className="w-full py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
