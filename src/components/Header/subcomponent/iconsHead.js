import Image from "next/image";
import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";


export default function IconsHead() {
  return (
    <div className="flex w-full">
    <div className="flex justify-end items-center bg-secondary h-full w-full px-4 py-3">
      <AiFillClockCircle className="text-xl -mt-[2px] inline text-primaryText" />
      <span className="text-[#f1f1f1] text-sm inline mx-2">
        {" "}
        Sat - Thu: 9:00 am - 5.00pm
      </span>
      <span className="text-primaryText mx-2">|</span>
      <div className="flex items-center text-xl cursor-pointer text-primaryText justify-center gap-x-2 ">
        <BiLogoFacebook className="bounce-icon" />
        <BiLogoTwitter className="bounce-icon" />
        <BiLogoLinkedin className="bounce-icon" />
        <BiLogoInstagram className="bounce-icon" />
        <BiLogoYoutube className="bounce-icon" />
      </div>
    </div>
  </div>
  )
}
