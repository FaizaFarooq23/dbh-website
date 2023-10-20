import React from "react";
import { BiPlusMedical } from "react-icons/bi";

export default function Counter({ number, text}) {
  return (
    <div className="gap-y-4 flex flex-col items-start justify-start ">
      <div className="flex items-center justify-center font-bold text-4xl gap-x-2">
        <span className="text-primary" > {number}</span>
        <BiPlusMedical className="text-2xl mt-1 text-zinc-700 "/>
      </div>
      <div className="text-lg text-[#161B39] font-bold">
      <span> {text}</span>
      </div>
      <div className="border-primary border-b-4 w-10 mt-2 ">

      </div>
    </div>
  );
}
