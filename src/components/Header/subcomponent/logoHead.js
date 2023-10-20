import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";

export default function LogoHead() {
  const headList = [
    {
      icon: <BiSolidPhoneCall/>,
      title: "Call Us: +92 332 6578943",
      description: "(Sat - Thu)",
    },
    {
      icon:  <IoIosMail />,
      title: "Email Us for help:",
      description: "info@dbhtrading.com",
    },
    {
      icon: <FaMapLocationDot />,
      title: "Visit Us:",
      description: "Islamabad, Pakistan",
    },
  ];

  return (
    <div className="flex justify-between items-center bg-primary px-10 pt-6 pb-14 ">
      <div className="">
        <img src="images/dbhLogo.jpg" alt="logo" className="h-20 w-40" />
      </div>
      <div className="flex gap-x-20 ">
      {headList.map((item, index) => (
        <div key={index} className="flex gap-x-4  ">
          <div  className="flex items-start  text-3xl cursor-pointer text-white bounce-icon">
            {item.icon}
          </div>
          <div>
            <h1 className="text-lg text-white font-semibold">{item.title}</h1>
            <p className="text-sm text-[#f1f1f1] font-medium ">{item.description}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
