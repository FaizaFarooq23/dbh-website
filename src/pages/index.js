import { Inter } from "next/font/google";
import BaseLayout from "@/components/BaseLayout/baseLayout";
import TextSection from "@/components/TextSection/textSection";
import IntroSection from "@/components/IntroSection/introSection";
import Products from "@/components/TradeProducts/products";
import Services from "@/components/Services/services";
import Facts from "@/components/Facts/facts";
import HeroSection from "@/components/HeroSection/hero";
import Map from "@/components/Map/map";
import ContactUs from "@/components/ContactUs/contactUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
< div className="bg-white">
   <BaseLayout>
   <HeroSection />
   <TextSection />
   <IntroSection />
   <Products />
   <Services/>
   <Facts/>
   <ContactUs/>
   <Map />
   </BaseLayout>
  
   </div>
  );
}
