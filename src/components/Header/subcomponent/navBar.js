
import React, { useState } from "react";

export default function NavBar({productRef,serviceRef,contactRef,aboutUsRef, setActive}) {
  
  const [activeRef, setActiveRef] = useState(null);
  const scrollToHero = () => {
    setActive("");
    if (heroRef && heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProducts = () => {
    setActive("Products");
    if (productRef && productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAboutUs = () => {
    setActive("About Us");
    if (aboutUsRef && aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToService = () => {
    setActive("Service");
    if (serviceRef && serviceRef.current) {
      serviceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContactUs = () => {
    setActive("");
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <div className="flex justify-between rounded-lg bg-white px-8 py-3 w-[90%] shadow-lg z-50">
      <div className="flex items-center gap-x-16">
        
          <div  className="nav-item font-semibold cursor-pointer">
            Home
          </div>

          <div className="nav-item font-semibold cursor-pointer" onScroll={scrollToAboutUs}>
            AboutUs
          </div>

          <div className="nav-item font-semibold cursor-pointer" onScroll={scrollToProducts}>
            Products
          </div>

          <div  className="nav-item font-semibold cursor-pointer"onScroll={scrollToService}>
            Services
          </div>

          <div  className="nav-item font-semibold cursor-pointer"onScroll={scrollToContactUs}>
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
