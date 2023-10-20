import React, { Children } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";

export default function BaseLayout({ children }) {
  return (
    <div className="w-screen h-screen items-center overflow-x-hidden flex">
      <div className="w-full h-full flex flex-col justify-between ">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
