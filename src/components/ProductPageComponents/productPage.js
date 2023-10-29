import React from "react";
import HeroImage from "./subComponents/heroImage";
import ImportExport from "./subComponents/importExport";
import GetQuote from "./subComponents/getQuote";
import Card from "./subComponents/productCard";
import ContactUs from "../ContactUs/contactUs";
import Map from "../Map/map";

export default function ProductPage({ item }) {
  return (
    <div>
      <div className="flex flex-col items-center ">
        <HeroImage customImage={item.image} cardTitle={item.cardTitle} />
        <ImportExport
          textHeading={item.textHeading}
          description1={item.description1}
          description2={item.description2}
          image={item.importExportImage}
          caption={item.caption}
        />
        <GetQuote quoteTitle={item.quoteTitle} />
        <Card
          description={item.description}
          productTitle={item.cardTitle}
          subheading={item.subheading}
          productList={item.productList}
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center p-10 lg:p-14 gap-x-12">
        <ContactUs />
        <Map />
      </div>
    </div>
  );
}
