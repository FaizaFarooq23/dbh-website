import React from "react";
import { MdOutlineRequestQuote } from "react-icons/md";

export default function GetQuote({ quoteTitle }) {
  return (
    <div className="px-14 bg-primary w-[90%] flex flex-col lg:flex-row items-start lg:items-center justify-between rounded-lg py-4 gap-y-8 lg:gap-y-0">
      <div className="flex flex-col lg:flex-row gap-x-1 lg:gap-x-2 text-xl font-semibold text-white ">
     <span>We Supply</span>
        <span>{quoteTitle}</span>
        <span className=" text-slate-300 font-normal">
          Across UAE, DUBAI and MENNA
        </span>
      </div>
      <div className="bg-white flex items-center rounded-lg py-4 px-8 text-lg font-medium cursor-pointer hover:text-white hover:bg-secondary shadow-md">
        <MdOutlineRequestQuote className="mr-2" />
        Get a Quote
      </div>
    </div>
  );
}
