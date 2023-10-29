import React from "react";

export default function HeroImage({ customImage,cardTitle }) {
  return (
    <div className="w-screen h-[320px] lg:-mt-10">
      {" "}
      <div
        style={{ backgroundImage: `url(${customImage})` }}
        className={`h-full flex flex-col justify-center w-full cursor-pointer bg-no-repeat bg-cover brightness-50`}
      ></div>
      <div className="absolute inset-20 lg:inset-80 ">
        <div className="flex flex-col mt-10 lg:mt-5 items-center text-center text-white font-bold text-xl lg:text-4xl">
          <span>{cardTitle}</span>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-5 text-lg gap-x-2  text-white">
         <div><span>Home</span>-<span>Products</span>-</div> <span>{cardTitle}</span>
        </div>
      </div>
    </div>
  );
}
