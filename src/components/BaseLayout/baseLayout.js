import React, { useState, useEffect } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import NavBar from "../Header/subcomponent/navBar";

export default function BaseLayout({ children, productRef, serviceRef, contactRef, aboutUsRef, heroRef }) {
  const [show, setShow] = useState(false);



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

        <div className={`w-full fixed z-50 transition duration-300  ${show ? "translate-y-0" : "-translate-y-20"}`}>
          <NavBar heroRef={heroRef} productRef={productRef} serviceRef={serviceRef} contactRef={contactRef} aboutUsRef={aboutUsRef} complete />
        </div>

        <Header contactRef={contactRef} productRef={productRef} aboutUsRef={aboutUsRef} serviceRef={serviceRef} heroRef={heroRef} />
        {children}
        <Footer />
      </div>
    </div>
  );
}
