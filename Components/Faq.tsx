import { useState } from "react";
import { Geologica } from "next/font/google";

const geologica = Geologica({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What types of chairs do you offer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How can we get in touch with you?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "Do your chairs come with a warranty?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "What will be delivered? And when?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "Can I try a chair before purchasing?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?.",
    },
    {
      question: "How do I clean and maintain my Comforty chair?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
  ];

  const toggleIndex = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    // <div className="w-screen px-[300px] py-10 ">
    //   <h2 className={`text-[48px] font-[700] text-center mb-[21px] ${geologica.className} `}>Questions Looks Here</h2>
    //   <p className="text-gray-500 te text-center mb-8">
    //     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    //   </p>

    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
    //     {questions.map((item, index) => (
    //       <div
    //         key={index}
    //         className="bg-[#F7F7F7] w-[648px] h-[170px] shadow-sm p-4 cursor-pointer"
    //         onClick={() => toggleIndex(index)}
    //       >
    //         <div className="flex justify-between items-center">
    //           <h3 className="font-[700] text-[18px] leading-[26px] ">{item.question}</h3>
    //           <span className="text-xl font-bold">{activeIndex === index ? '-' : '+'}</span>
    //         </div>

    //           <p className="font-[400] text-[16px] leading-[24px] mt-2 ">{item.answer}</p>

    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="w-full   px-[300px] py-[80px] max-[1800px]:px-[150px] max-[1080px]:px-[75px] max-[650px]:px-[35px]">
      <h2
        className={`text-3xl sm:text-4xl lg:text-[48px] font-bold text-center mb-6 lg:mb-[21px] ${geologica.className}`}
      >
        Questions Look Here
      </h2>
      <p className="text-gray-500 text-center mb-8 text-sm sm:text-base">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center">
        {questions.map((item, index) => (
          <div
            key={index}
            className="bg-[#F7F7F7] max-w-full lg:max-w-[648px] w-full h-auto shadow-sm p-4 cursor-pointer"
            onClick={() => toggleIndex(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-base sm:text-lg leading-[26px]">
                {item.question}
              </h3>
              <span className="text-xl font-bold">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="font-normal text-sm sm:text-base leading-[24px] mt-2">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
