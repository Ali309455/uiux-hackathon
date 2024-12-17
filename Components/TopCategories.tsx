import React from "react";
import CategoryCard from "./CategoryCard";

const Featured = () => {
  const products = [
    {
      desc: "Wing Chair",
      no_of_products: "3,584",
      imgSrc: "/chair5.png", // Replace with the actual image path for the Wing Chair
    },
    {
      desc: "Wooden Chair",
      no_of_products: "157",
      imgSrc: "/chair7.png", // Replace with the actual image path for the Wooden Chair
    },
    {
      desc: "Desk Chair",
      no_of_products: "154",
      imgSrc: "/chair3.png", // Replace with the actual image path for the Desk Chair
    },
  ];

  return (
    <div className="w-screen px-[300px] max-1800:px-[150px] max-1080:px-[75px] max-650:px-[35px] py-[20px] pb-[229px] ">
      {/* Heading */}
      <div className="pb-[45px]">
        <h3 className="text-[32px] leading-[35.2px] font-[600]">
          Top Categories
        </h3>
      </div>
      <div className="flex items-center justify-between max-802:flex-col gap-[24px]">
        {products.map((item, index) => (
          <CategoryCard key={index} info={item} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
