import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

export default function HeroSection() {
  return (
    <div className="">
      <img
        src="/images/heroImage.jpg"
        alt="heroImage"
        className="w-full h-[560px] -mt-10 "
      />
      <div className="flex flex-col items-start px-20">
      <div className=" z-10 bg-tertiary -mt-[42%] text-white h-[400px] w-[52%] py-10 px-8">
        <div>
          <img src="/images/dbhLogo.jpg" alt="logo" className="w-32 h-16" />
        </div>
        <div className="font-bold text-4xl py-4 mt-2 ">
        <span>Achieving Global Market Supremacy</span>
        </div>
        <div className="py-4 font-medium  ">
        <span>The trading collaborator you can trust.</span>
        </div>
        <div className="py-2 px-4 cursor-pointer bg-secondary w-[36%] mt-6  font-semibold flex items-center justify-center rounded-sm ">
        <button className="text-center uppercase">Contact Us</button>
        <IoMdArrowDropright className="ml-2 text-2xl"/>
        </div>
      </div>
      </div>
    </div>
  );
}