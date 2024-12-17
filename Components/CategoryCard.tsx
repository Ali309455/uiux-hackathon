import React from 'react'
interface Icategarycard {
    imgSrc:string, 
    desc:string, 
    no_of_products:string
}

const CategoryCard: React.FC<{ info: Icategarycard }> = ({ info }) => {
  return (
    <div className='relative'>
      <div
  className={`w-[424px] h-[424px] max bg-cover bg-center`}
  style={{ backgroundImage: `url(${info.imgSrc})` }}
></div>

        <div className='bg-[#000000B2] absolute bottom-0 p-[20px] flex flex-col gap-[10px] rounded-b-[10px] w-full'>
            <p className='text-[20px] text-white leading-[22px]'>{info.desc}</p>
            <p className='text-[14px] text-white font-[400] leading-[15.4px]'>{info.no_of_products} Proucts</p>
        </div>
    </div>
  )
}

export default CategoryCard
