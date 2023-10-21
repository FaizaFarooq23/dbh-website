import React from "react";
import IconsHead from "./subcomponent/iconsHead";
import LogoHead from "./subcomponent/logoHead";
import NavBar from "./subcomponent/navBar";

export default function Header({productRef,serviceRef,contactRef,aboutUsRef, setActive}) {
  return (
    <div className="">
      <IconsHead />
      <LogoHead/>
      <div className="-mt-8 flex justify-center">
      <NavBar productRef={productRef} serviceRef={serviceRef} contactRef={contactRef} aboutUsRef={aboutUsRef} setActive={setActive} />
      </div>
    </div>
  );
}
