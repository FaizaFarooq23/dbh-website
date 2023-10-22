import React, { useEffect, useState } from "react";
import { BiPlusMedical } from "react-icons/bi";

export default function Counter({ number, text}) {

  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    if (count < number) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [count, number]);
  
  return (
    <div className="gap-y-4 flex flex-col items-start justify-start w-[33%] lg:w-full  ">
      <div className="flex items-center justify-center font-bold text-2xl lg:text-4xl gap-x-2">
        <span className="text-primary" > {count}</span>
        <BiPlusMedical className="text-sm lg:text-2xl mt-1 text-zinc-700 "/>
      </div>
      <div className="text-[16px] text-[#161B39] font-bold">
      <span> {text}</span>
      </div>
      <div className="border-primary border-b-4 w-10 mt-2 ">

      </div>
    </div>
  );
}
