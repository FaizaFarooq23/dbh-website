import React from "react";

export default function ImportExport({
  textHeading,
  description1,
  description2,
  caption,
  image,
}) {
  return (
    <div className="p-10 lg:p-14 ">
      <div className="flex items-center gap-x-6">
        <span className=" border-primary border-b-[3.5px] w-14  "></span>
        <span className=" text-black font-semibold text-xl ">
          Import and Export
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 ">
        <div className="flex flex-col py-8 pr-4 ">
          <span className="text-2xl text-black font-bold">{textHeading}</span>
          <span className=" text-black leading-7 pt-8">{description1}</span>
          <span className=" text-black leading-7 pt-4">{description2}</span>
        </div>
        <div className="flex flex-col items-center gap-y-5">
          <img src={image} className="shadow-lg rounded-lg h-72 w-full lg:w-[90%]" />
          <span className="text-lg text-black text-center w-full lg:w-[90%]">{caption}</span>
        </div>
      </div>
    </div>
  );
}
