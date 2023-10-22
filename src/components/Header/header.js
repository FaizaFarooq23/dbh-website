import React from "react";
import IconsHead from "./subcomponent/iconsHead";
import LogoHead from "./subcomponent/logoHead";
import NavBar from "./subcomponent/navBar";

export default function Header({productRef,serviceRef,contactRef,aboutUsRef,heroRef}) {
  return (
    <div className="lg:flex flex-col hidden">
      <IconsHead />
      <LogoHead/>
      <div className="-mt-8 flex justify-center">
      <NavBar heroRef={heroRef} productRef={productRef} serviceRef={serviceRef} contactRef={contactRef} aboutUsRef={aboutUsRef} />
      </div>
    </div>
  );
}
