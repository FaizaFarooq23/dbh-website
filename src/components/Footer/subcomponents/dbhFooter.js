import React, { useState } from "react";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoLocation } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";

export default function DbhFooter({
  contactRef,
  productRef,
  aboutUsRef,
  serviceRef,
  heroRef,
  setMenuClose, // You need to add setMenuClose to the function parameters.
}) {
  const quickLinks = [
    {
      name: "Home",
    },
    {
      name: "Products",
    },
    {
      name: "Services",
    },
    {
      name: "About Us",
    },
    {
      name: "Contact Us",
    },
  ];

  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  
  };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-4 gap-x-1 px-10 py-10 bg-primary">
      <div className="py-4 mt-8">
        <div className="-mt-6">
          <img src="images/dbhLogo.jpg" alt="logo" className="h-16 w-32" />
        </div>
        <div className="mt-6">
          <p className="text-white font-medium">General Trading Company</p>
        </div>
        <div className="flex items-center gap-x-4 mt-20 ">
          <div className="rounded-full cursor-pointer bounce-icon bg-blue-600 text-primaryText p-2">
            <BiLogoFacebook className="" />
          </div>
          <div className="rounded-full cursor-pointer bounce-icon bg-blue-400 text-primaryText p-2">
            <BiLogoTwitter className="" />
          </div>
          <div className="rounded-full cursor-pointer bounce-icon bg-secondary text-primaryText p-2">
            <BiLogoLinkedin className="" />
          </div>
          <div className="rounded-full cursor-pointer bounce-icon bg-tertiary text-primaryText p-2">
            <BiLogoYoutube className="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col py-6 ">
        <div className="flex ">
          <span className="text-primaryText font-bold text-2xl ">
            Quick Links
          </span>
          <div className="text-slate-300 opacity-20 px-4">_______________</div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-12 pr-2">
          {quickLinks.map((item, index) => (
            <div
              key={index}
              className="flex items-center font-medium slide-underline  text-primaryText gap-x-2 justify-start"
              onClick={() => handleScroll(index === 4 ? contactRef : index === 1 ? productRef : index === 3 ? aboutUsRef : index === 2 ? serviceRef : heroRef)}
            >
              <RiArrowDropDownLine className="-ml-2 -rotate-90 text-3xl" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="flex py-6">
          <span className="text-primaryText font-bold text-2xl">Official Info</span>
          <div className="text-slate-300 opacity-20 px-4">_______________</div>
        </div>
        <div className="pr-2">
          <div className="mt-6  flex w-full justify-start">
            <div className="mt-0.5">
              <IoLocation className="text-xl  text-secondary " />
            </div>
            <span className="text-primaryText  font-medium px-4">
              SAI Business Centre 103, Al Makhawi Building , Opp Al Nasr Club ,
              Oud Metha . PO Box - 80744, Dubai
            </span>
          </div>
          <div className="mt-6 flex w-full justify-start ">
            <BsFillTelephoneFill className="text-xl text-secondary " />
            <span className="text-primaryText  font-medium px-4">+971 4 398 4283</span>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex py-6">
          <span className="text-primaryText font-bold text-2xl">News Letter</span>
          <div className="text-slate-300 opacity-20 px-4">_______________</div>
        </div>
        <div className="mt-6 pr-4">
          <h3 className="text-xl text-primaryText font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-200 mb-6">Stay updated with our latest news and updates.</p>
          <form action="#" method="post" className="flex items-center justify-start ">
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              required
              className="py-2 px-4 border w-[80%] border-gray-300 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-secondary text-white py-3 px-4 rounded-r-md nav-button focus:outline-none"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
