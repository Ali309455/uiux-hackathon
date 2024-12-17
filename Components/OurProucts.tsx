import React from "react";
import Card from "./Card";

const OurProducts = () => {
  const products = [
    {
      desc: "IPS LCD Gaming Monitor",
      price: "$370",
      imgSrc: "/categorychair3.png", // Replace with actual image URL for monitor
      isActive: true,
      oldprice: "$400",
      featured: { tag: "New", color: "#01AD5A" },
      star: 4.8,
      reviews: 99,
    },
  ];
  return (
    <div className="w-screen px-[300px] max-1800:px-[150px] max-1080:px-[75px] max-650:px-[35px] py-[20px] ">
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
