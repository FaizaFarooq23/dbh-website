import React, { useState, useEffect } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import NavBar from "../Header/subcomponent/navBar";


export default function BaseLayout({ children, productRef, serviceRef, contactRef, aboutUsRef, heroRef }) {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for mobile screen width and update isMobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width as needed
    };

    // Initial check when the component mounts
    checkIsMobile();

    // Listen for window resize events to update isMobile
    window.addEventListener("resize", checkIsMobile);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };

  }, []);

  useEffect(() => {
    const listenToScroll = () => {
      console.log("scrolling");
      let heightToShowFrom = 280;
      const winScroll = document.body.scrollTop ||
        document.documentElement.scrollTop;
      console.log(winScroll);
      if (winScroll > heightToShowFrom) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    <div className="w-screen min-h-screen items-center overflow-x-hidden flex">
     
      <div className="w-full h-full flex flex-col justify-between ">
        <div className={`w-full fixed z-50 transition duration-300 ${show || isMobile ? "translate-y-0" : "lg:-translate-y-20"}`}>
          <NavBar heroRef={heroRef} productRef={productRef} serviceRef={serviceRef} contactRef={contactRef} aboutUsRef={aboutUsRef} complete />
        </div>

        <Header contactRef={contactRef} productRef={productRef} aboutUsRef={aboutUsRef} serviceRef={serviceRef} heroRef={heroRef} />
   
        {children}
        <Footer  contactRef={contactRef} productRef={productRef} aboutUsRef={aboutUsRef} serviceRef={serviceRef} heroRef={heroRef} />
      </div>

    </div>
  );
}
