import React from "react";
import Card from "./Card";

const OurProducts = () => {
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
  ];
  return (
    <div className="w-screen px-[300px] max-1800:px-[150px] max-1080:px-[75px] max-650:px-[35px] py-[20px] max-802:pt-[630px] max-750:pt-[100px] max-1080:pt-[1130px] ">
        {/* Heading */}
        <div className="pb-[45px]">
            <h3 className="text-[32px] leading-[35.2px] font-[600] text-center pb-[74px]">Our Products</h3>
        </div>
      <div className="grid  max-750:grid-cols-1 max-1285:grid-cols-2 max-1930:grid-cols-3 lg:grid-cols-4 justify-items-center gap-[24px]">
        {products.map((item, index) => (
          <Card key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
