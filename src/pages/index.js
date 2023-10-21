import React, { useEffect, useRef, useState } from "react";
import BaseLayout from "@/components/BaseLayout/baseLayout";
import HeroSection from "@/components/HeroSection/hero";
import TextSection from "@/components/TextSection/textSection";
import IntroSection from "@/components/IntroSection/introSection";
import Products from "@/components/TradeProducts/products";
import Services from "@/components/Services/services";
import Facts from "@/components/Facts/facts";
import ContactUs from "@/components/ContactUs/contactUs";
import Map from "@/components/Map/map";

export default function Home() {
  const [active, setActive] = useState("");
  const heroRef = useRef(null);
  const productRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactUsRef = useRef(null);
  const servicesRef = useRef(null);

  const refs = [
    { name: "Hero", ref: heroRef },
    { name: "Products", ref: productRef },
    { name: "About Us", ref: aboutUsRef },
    { name: "Contact Us", ref: contactUsRef },
    { name: "Services", ref: servicesRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentRef = refs.find(({ ref }) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
      });

      if (currentRef) {
        setActive(currentRef.name);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial call to set active section
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refs]);

  return (
    <div className="bg-white">
      <BaseLayout aboutUsRef={aboutUsRef} serviceRef={servicesRef} productRef={productRef} contactRef={contactUsRef} setActive={setActive}>
        <HeroSection />
        <div ref={aboutUsRef}>
          <TextSection />
          <IntroSection />
        </div>
        <div ref={productRef}>
        <Products />
        </div>
        <div ref={servicesRef}>
        <Services />
        </div>
        <Facts />
        <div ref={contactUsRef} className="flex w-full justify-center px-20 my-10">
          <ContactUs  />
          <Map />
        </div>
      </BaseLayout>
    </div>
  );
}
