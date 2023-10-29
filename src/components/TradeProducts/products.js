import React from "react";
import ProductCards from "./subComponents/cards";

export default function Products() {
  const productList = [
    {
      image: "/images/merchandise.jpg",
      imageName: "merchandise",
      productName: "Merchandise",
      productCategory: "Service Products",
      cardTitle: "Merchandise",
      cardDescription:
        "At dbh we offer a unique way to make a statement and connect with the world around.",
      productlink: "merchandise",
    },
    {
      image: "/images/hotel-room.jpg",
      imageName: "Hotel Room",
      productName: "Hospitality-Hotel Supply Products",
      productCategory: "Hotel Supplies",
      cardTitle: "Hospitality",
      cardDescription:
        "Our offerings encompass personalized supplies and branded products, showcasing top-notch operational tools tailored for various sectors. ",
      productlink: "hospitality",
    },
    {
      image: "/images/foodstuff.jpg",
      imageName: "Foodstuff",
      productName: "Foodstuff Products",
      productCategory: "Foodstuff Trading",
      cardTitle: " Foodstuff",
      cardDescription:
        " We deliver premium, seasonal food products like rice, dates, and grains, guaranteeing exceptional culinary experiences that surpass expectations.",
      productlink: "foodstuff",
    },
    {
      image: "/images/retail.jpg",
      imageName: "Retail",
      productName: "Retail & E-commerce Products",
      productCategory: "E-Commerce",
      cardTitle: "Retail",
      cardDescription:
        "At dbh, we procure retail goods both domestically and globally, enabling us to distribute a diverse range of products from various manufacturers to retailers.",
      productlink: "retail",
    },
    {
      image: "/images/health-medical.jpg",
      imageName: "health-medical",
      productName: "Medical Equipments",
      productCategory: "E-Commerce",
      cardTitle: "Health and Medical",
      cardDescription:
        "We offer a wide range of medical equipment and supplies, including but not limited to, surgical masks, gloves, and protective gear.",
      productlink: "health-medical",
    },
    {
      image: "/images/computer-hardware.jpg",
      imageName: "computer-hardware",
      productName: "Computer Hardware and Accessories",
      productCategory: "Computer Accessories",
      cardTitle: "Computer Accessories",
      cardDescription:
        "dbh offers the finest new and pre-owned computer hardware, as well as accessories sourced from world-renowned producers and manufacturers.",
      productlink: "computer-accessories",
    },
  ];
  return (
    <div className=" my-10 py-8 bg-[#fafafa]  flex flex-col items-center justify-center">
      <div className=" flex flex-col items-center gap-y-4">
        <div className="text-primary text-2xl font-bold">dbh Products</div>
        <div className="text-4xl font-bold">Our Product Line</div>
        <div className="text-center text-lg px-4 lg:px-60">
          At dbh we offer a diverse range of high-quality promotional items,
          from branded merchandise to safety products, including but not limited
          to the following:
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-x-10 gap-y-10 px-[6%]  py-10">
        {productList.map((product, index) => (
          <div className="" key={index}>
            <ProductCards
              productCategory={product.productCategory}
              productName={product.productName}
              cardDescription={product.cardDescription}
              cardTitle={product.cardTitle}
              image={product.image}
              imageName={product.imageName}
              link={product.productlink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
