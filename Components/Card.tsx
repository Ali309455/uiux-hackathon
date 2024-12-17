import React from "react";

interface ICard {
  imgSrc: string;
  desc: string;
  price: string;
  isActive: Boolean;
  forsinglepage?: Boolean;
  oldprice?: string | null;
  featured?: { tag: string; color: string } | null; // Add this optional property since it's used when `Issale` is true
}

const Card: React.FC<{ product: ICard }> = ({ product }) => {
  {
    if (typeof product.forsinglepage === null) {
      product.forsinglepage = false;
    }
  }
  return (
    <div className=" w-[312px]  relative">
      <div className="w-[312px]  h-[312px]  rounded-[4px] flex flex-col items-center justify-center">
        <div
          className={`rounded-[8px] w-[313px] h-[313px]  bg-cover bg-center`}
          style={{ backgroundImage: `url(${product.imgSrc})` }}
        ></div>

        {product.featured && (
          <span
            className="mt-1 font-[500] absolute top-[10px] left-[15px] py-[6px] px-[10px] w-[58px] h-[26px] max-sm:py-[3px] max-sm:px-[10px] max-sm:w-fit max-sm:h-fit rounded-[4px] text-white text-[12px] flex items-center justify-center"
            style={{ backgroundColor: product.featured.color }}
          >
            {product.featured.tag}
          </span>
        )}
      </div>
      {!product.forsinglepage && (
        <div className="flex flex-row-reverse items-center justify-between p-[12px]">
          {product.isActive && (
            <div className="w-[44px] h-[44px] rounded-[8px] bg-[#029FAE] flex items-center justify-center">
              <img src="/cart.png" width={20} className="" alt="add to cart" />
            </div>
          )}
          {!product.isActive && (
            <div className="w-[44px] h-[44px] rounded-[8px] bg-[#F0F2F3] flex items-center justify-center">
              <img
                src="/cart.png"
                width={20}
                className="invert"
                alt="add to cart"
              />
            </div>
          )}
          <div className="mt-4 flex flex-col gap-[10px] w-[201px]">
            {product.isActive && (
              <h2 className=" font-[400] text-[16px] text-[#007580] leading-[2px] max-sm:text-[16px]">
                {product.desc}
              </h2>
            )}
            {!product.isActive && (
              <h2 className=" font-[400] text-[16px] text-black leading-[2px] max-sm:text-[16px]">
                {product.desc}
              </h2>
            )}
            <div className="flex gap-[13px] items-center">
              <span className="font-[500] text-[18px] leading-[20px]  max-sm:text-[16px]">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      )}
      {product.forsinglepage && (
        <div className="flex  items-center justify-between p-[12px]">
          <h2 className=" font-[400] text-[16px] text-black leading-[2px] max-sm:text-[16px]">
            {product.desc}
          </h2>
          <span className="font-[500] text-[18px] leading-[20px]  max-sm:text-[16px]">
            {product.price}
          </span>
        </div>
      )}
    </div>
  );
};

export default Card;

//
