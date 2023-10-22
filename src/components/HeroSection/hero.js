import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

export default function HeroSection({contactRef}) {
  const handleScroll = (ref) => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="">
      <img
        src="/images/heroImage.jpg"
        alt="heroImage"
        className="w-full h-[560px] -mt-10 "
      />
      <div className="flex flex-col items-start  px-4 lg:px-20">
      <div className=" z-10 bg-tertiary flex flex-col justify-between  text-white h-[400px] inset-24 lg:inset-72 left-4 lg:left-20 w-[80%] lg:w-[50%]  absolute py-20 px-4 lg:px-16">
        <div>
          <img src="/images/dbhLogo.jpg" alt="logo" className="w-20 -mt-8 lg:w-32 h-10 lg:h-16" />
        </div>
        <div className="font-bold text-2xl lg:text-4xl py-4 mt-2 ">
        <span>Achieving Global Market Supremacy</span>
        </div>
        <div className="py-4 font-medium  ">
        <span>The trading collaborator you can trust.</span>
        </div>
        <div className="py-2 px-4 cursor-pointer bg-secondary w-48 lg:w-[36%] mt-6  font-semibold flex items-center justify-center rounded-sm " onClick={handleScroll}>
        <button className="text-center uppercase">Contact Us</button>
        <IoMdArrowDropright className="ml-2 text-2xl"/>
        </div>
      </div>
      </div>
    </div>
  );
}