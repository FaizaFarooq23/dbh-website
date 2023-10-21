
import React, { useState } from "react";

export default function NavBar({ productRef, serviceRef, contactRef, aboutUsRef, heroRef, complete }) {

  const scrollToHero = () => {
    
    if (heroRef && heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProducts = () => {
    
    if (productRef && productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAboutUs = () => {
    
    if (aboutUsRef && aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToService = () => {
    
    if (serviceRef && serviceRef.current) {
      serviceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContactUs = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <div className={`flex justify-between items-center rounded-lg bg-white  py-3 ${complete ? "w-full px-20" : "w-[90%] px-8"}  shadow-lg z-50`}>
      {complete &&
        <img src="/images/dbhLogo.jpg" className="h-10 w-20" />
      }
      <div className="flex items-center gap-x-16">
        <div onClick={scrollToHero} className="nav-item font-semibold cursor-pointer">
          Home
        </div>

        <div className="nav-item font-semibold cursor-pointer" onClick={scrollToAboutUs}>
          AboutUs
        </div>

        <div className="nav-item font-semibold cursor-pointer" onClick={scrollToProducts}>
          Products
        </div>

        <div className="nav-item font-semibold cursor-pointer" onClick={scrollToService}>
          Services
        </div>

        <div className="nav-item font-semibold cursor-pointer" onClick={scrollToContactUs}>
          ContactUs
        </div>
      </div>
      <div>
        <button className="bg-secondary nav-button shadow-xl text-white font-semibold hover:bg-primary rounded-lg px-4 py-3 cursor-pointer">
          Get a quote now
        </button>
      </div>
    </div>
  );
}
