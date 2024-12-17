import React from "react";
import Card from "./Card";

const Featured = () => {
  const products = [
    {
      desc: "Library Stool Chair",
      price: "$20",
      imgSrc: "/chair1.png", // Replace with the actual image path
      isActive: true,
      featured: { tag: "New", color: "#01AD5A" },
    },
    {
      desc: "Library Stool Chair",
      price: "$20",
      oldprice: "$30",
      imgSrc: "/chair2.png", // Replace with the actual image path
      isActive: false,
      featured: { tag: "Sales", color: "#DB4444" },
    },
    {
      desc: "Library Stool Chair",
      price: "$20",
      imgSrc: "/chair3.png", // Replace with the actual image path
      isActive: false,
      featured: null,
    },
    {
      desc: "Library Stool Chair",
      price: "$20",
      imgSrc: "/chair4.png", // Replace with the actual image path
      isActive: false,
      featured: null,
    },
  ];

  return (
    <div className="w-screen px-[300px] max-1800:px-[150px] max-1080:px-[75px] max-650:px-[35px] py-[20px] max-802:pt-[100px] max-450:pt-[150px] ">
      {/* Heading */}
      <div className="pb-[45px]">
        <h3 className="text-[32px] leading-[35.2px] font-[600] max-750:text-center" >
          Featured Products
        </h3>
      </div>
      <div className="grid max-750:grid-cols-1 max-1285:grid-cols-2 max-1930:grid-cols-3 lg:grid-cols-4 justify-items-center gap-[24px]">
        {products.map((item, index) => (
          <Card key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
