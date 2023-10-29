import React from "react";
import { MdOutlineRequestQuote } from "react-icons/md";

export default function GetQuote({ quoteTitle }) {
  return (
    <div className="px-14 bg-primary w-[90%] flex items-center justify-between rounded-lg py-4">
      <div className="flex gap-x-2 text-xl font-semibold text-white ">
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
