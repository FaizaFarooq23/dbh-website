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

    <div className="bg-[#fafafa] py-8 flex  px-20 gap-x-10  ">

        <div className="flex  items-center">
            <img src="/images/shipping.jpg" className="h-[300px] w-[800px]"/>
        </div>
        <div>
      <div className="">
        <span className="text-4xl font-bold text-[#161B39] ">
          Facts About
          <span className="text-primary"> dbh</span> General Trading Company
        </span>
      </div>
      <div className="pt-8 text-[#39385A]">We work with the leading producers, manufacturers and brands in the world.</div>
      <div className="flex gap-x-10 pt-8">
        {counterData.map(({ number, text }) => (
          <Counter number={number} text={text} />
        ))}
      </div>
      </div>
    </div>
  );
}
