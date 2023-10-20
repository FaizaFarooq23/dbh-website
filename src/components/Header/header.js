import React from "react";
import IconsHead from "./subcomponent/iconsHead";
import LogoHead from "./subcomponent/logoHead";
import NavBar from "./subcomponent/navBar";

export default function Header() {
  return (
    <div className="">
      <IconsHead />
      <LogoHead/>
      <div className="-mt-8 flex justify-center">
      <NavBar />
      </div>
    </div>
  );
}
