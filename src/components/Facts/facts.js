import React from "react";
import Counter from "./subComponent/counter";

export default function Facts() {
  const counterData = [
    {
      number: 150,
      text: "Happy Clients",
    },
    {
      number: 85,
      text: "Projects Completed",
    },
    {
      number: 100,
      text: "Team Members",
    },
  ];

  return (

    <div className="bg-[#fafafa] py-16 flex flex-col lg:flex-row px-4 lg:px-20 gap-x-10  ">

        <div className="flex justify-center items-center">
            <img src="/images/shipping.jpg" className="h-[304px] w-[800px] inline-block lg:mt-2"/>
        </div>
        <div>
      <div className="mt-6 lg:mt-0">
        <span className="lg:text-4xl  text-xl font-bold text-[#161B39] ">
          Facts About
          <span className="text-primary"> dbh</span> General Trading Company
        </span>
      </div>
      <div className="pt-8 text-[#39385A]">We work with the leading producers, manufacturers and brands in the world.</div>
      <div className="flex justify-between gap-x-8 lg:gap-x-0  pt-10">
        {counterData.map(({ number, text }, index) => (
          <Counter key={index} number={number} text={text} />
        ))}
      </div>
      </div>
      
    </div>
  );
}
