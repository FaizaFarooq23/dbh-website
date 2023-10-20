import Link from "next/link";
import React from "react";

export default function ProductCards({
  image,
  imageName,
  productName,
  link,
  productCategory,
  cardTitle,
  cardDescription,
  productlink,
}) {
  return (
    <div className="flex flex-col shadow-xl rounded-lg bg-white ">
        <div className="">
          <img src={image} alt={imageName} className="w-80 h-56 rounded-t-lg" />
        </div>
      <div className="bg-primary bg-opacity-70 -mt-20 w-full p-1 z-10">
        <div className="flex items-center justify-start">
          <div className=" pl-10">
          <img src="/images/dbhLogo.jpg" className="h-4 w-8" alt="DBH Logo" />
          </div>
          <div className="flex flex-col items-center ml-14 gap-y-2">
            <span className="text-white  text-xs">{productName}</span>
            <Link href="/">
              <div className="text-white  text-xs">www.dbh.com</div>
            </Link>
          </div>
        </div>
      </div>
    
      <div className="flex items-center mt-5 justify-end px-4">
        <span className="bg-white w-40 text-xs py-1 text-center rounded-full border border-solid">
          {productCategory}
        </span>
      </div>
      <div className="flex bg-white flex-col rounded-b-lg p-4 gap-y-4 items-start">
        <div className="text-primary text-2xl font-bold">{cardTitle}</div>
        <div className=" text-zinc-600 pr-4">{cardDescription}</div>
        <div>
          <Link href="/">
            <div className="bg-white  border-2 hover:text-white hover:bg-primary border-primary text-secondary  rounded-full text-center py-2 px-6 cursor-pointer">
              Learn More
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
