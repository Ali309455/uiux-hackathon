import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
  })

const ExploreStyles = () => {
    return (
      <section className="w-screen px-[300px] max-1800:px-[150px] max-1080:px-[75px] max-650:px-[35px] py-[20px] ">
        <div className="h-[648px] relative">
          {/* Left Section */}
          <div className="absolute left-[-15px] max-802:left-0 bottom-0 -translate-y-1/2 -rotate-90 origin-bottom-left">
              <p className={` ${roboto.className}  font-[400] text-[34px] max-1080:text-[16px]  leading-[40px] text-center tracking-[1px] `}>
                EXPLORE NEW AND POPULAR STYLES
              </p>
            </div>
  
          {/* Right Section */}
          <div className="grid grid-cols-2 max-1080:grid-cols-1 gap-6">
            <div>
                <img src="/categorychair1.png" className="h-full" alt="chair" />
            </div>
            <div className="grid grid-cols-2 gap-6">
            <img
              src="/categorychair2.png" // Replace with your actual image URL
              alt="Chair 1"
              className="w-full h-auto object-cover border border-blue-500"
            />
            <img
              src="/categorychair3.png" // Replace with your actual image URL
              alt="Chair 2"
              className="w-full h-auto object-cover border border-blue-500"
            />
            <img
              src="/categorychair4.png" // Replace with your actual image URL
              alt="Chair 3"
              className="w-full h-auto object-cover border border-blue-500"
            />
            <img
              src="/categorychair3.png" // Replace with your actual image URL
              alt="Chair 4"
              className="w-full h-auto object-cover border border-blue-500"
            />
          </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ExploreStyles;
  