import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";


export default function NavBar({
  productRef,
  serviceRef,
  contactRef,
  aboutUsRef,
  heroRef,
  complete,
}) {
  const scrollToHero = () => {
    if (heroRef && heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
      setMenuClose();
    }
  };

  const scrollToProducts = () => {
    if (productRef && productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
      setMenuClose();
    }
  };
  const scrollToAboutUs = () => {
    if (aboutUsRef && aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
      setMenuClose();
    }
  };
  const scrollToService = () => {
    if (serviceRef && serviceRef.current) {
      serviceRef.current.scrollIntoView({ behavior: "smooth" });
      setMenuClose();
    }
  };
  const scrollToContactUs = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
      setMenuClose();
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const toggleMenu = () => {
    console.log("toggleMenu");
    setMenuOpen(!menuOpen);
  };

  const setMenuClose = () => {
    setMenuOpen(false);
  };

 

  return (
    <div
      className={`flex justify-between items-center lg:rounded-lg bg-white py-3 ${
        complete ? "w-full pl-4 lg:px-20" : "w-[90%] px-8"
      } shadow-lg z-50`}
    >
      {complete && <img src="/images/dbhLogo.jpg" className="h-10 w-20" />}
      <div className="hidden lg:flex items-center gap-x-16">
        <div
          onClick={scrollToHero}
          className="nav-item font-semibold cursor-pointer"
        >
          Home
        </div>

        <div
          className="nav-item font-semibold cursor-pointer"
          onClick={scrollToAboutUs}
        >
          AboutUs
        </div>

        <div
          className="nav-item font-semibold cursor-pointer"
          onClick={scrollToProducts}
        >
          Products
        </div>

        <div
          className="nav-item font-semibold cursor-pointer"
          onClick={scrollToService}
        >
          Services
        </div>

        <div
          className="nav-item font-semibold cursor-pointer"
          onClick={scrollToContactUs}
        >
          ContactUs
        </div>
      </div>
      <div className="hidden lg:flex">
        <button className="bg-secondary nav-button shadow-xl text-white font-semibold hover:bg-primary rounded-lg px-4 py-3 cursor-pointer">
          Get a quote now
        </button>
      </div>
      {/* Mobile View */}
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <RxCross1 className="text-black text-3xl mr-4" />
          ) : (
            <AiOutlineMenu className="text-black text-3xl mr-4" />
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="bg-white  py-6 w-full top-[60px] left-0 absolute z-50 lg:hidden flex shadow-lg">
          <nav className="lg:hidden overflow-scroll h-screen flex flex-col items-start w-full px-4 gap-y-8">
            <div
              onClick={scrollToHero}
              className={`hover:text-secondary mt-4 border-b-2 pb-4 w-full font-semibold cursor-pointer ${
                active === "Home" ? "text-secondary" : "text-black"
              }`}
            >
              Home
            </div>

            <div
              className={`hover:text-secondary font-semibold border-b-2 pb-4 w-full cursor-pointer ${
                active === "AboutUs" ? "text-secondary" : "text-black"
              }`}
              onClick={scrollToAboutUs}
            >
              AboutUs
            </div>

            <div
              className={`hover-text-secondary font-semibold w-full border-b-2 pb-4 cursor-pointer ${
                active === "Products" ? "text-secondary" : "text-black"
              }`}
              onClick={scrollToProducts}
            >
              Products
            </div>

            <div
              className={`hover:text-secondary font-semibold w-full border-b-2 pb-4 cursor-pointer ${
                active === "Services" ? "text-secondary" : "text-black"
              }`}
              onClick={scrollToService}
            >
              Services
            </div>

            <div
              className={`hover:text-secondary font-semibold w-full border-b-2 pb-4 cursor-pointer ${
                active === "ContactUs" ? "text-secondary" : "text-black"
              }`}
              onClick={scrollToContactUs}
            >
              ContactUs
            </div>
              
            <div className="">
              <button className="bg-secondary nav-button shadow-xl text-white font-semibold hover-bg-primary rounded-lg px-4 py-3 cursor-pointer">
                Get a quote now
              </button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
