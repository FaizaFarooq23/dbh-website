import ProductCards from "@/components/TradeProducts/subComponents/cards";
import React from "react";

export default function Card({ productTitle, description, subheading }) {
  const productList = [
    {
      image: "/images/gifts.jpg",
      imageName: "Corporate Gifts",
      productName: "Gifts",
      productCategory: "Gifts",
      cardTitle: "Corporate Gifts",
      cardDescription:
        " Show your appreciation to clients and employees with thoughtfully crafted corporate gifts that showcase your gratitude.",
      productlink: "",
    },
    {
      image: "/images/items.jpg",
      imageName: "Promotional Items",
      productName: "Promotional Items",
      productCategory: "Promotional Items",
      cardTitle: "Promotional Items",
      cardDescription:
        "Make a statement at trade shows and events with eye-catching promotional items that leave a lasting impression.      ",
      productlink: "",
    },
    {
      image: "/images/apperal.jpg",
      imageName: "Branded Apparel",
      productName: "Branded Apparel ",
      productCategory: "Branded Apparel",
      cardTitle: "Branded Apparel",
      cardDescription:
        " Elevate your team's look with custom-designed uniforms and corporate apparel that reflect your brand's identity.",
      productlink: "",
    },
    {
      image: "/images/giveaway.jpg",
      imageName: "Unique Giveaways",
      productName: "Unique Giveaways",
      productCategory: "Gadgets",
      cardTitle: "Unique Giveaways",
      cardDescription:
        "Create buzz around your brand with innovative and unique giveaway ideas that capture attention.",
    },
  ];
  return (
    <div className=" my-10 py-8 bg-[#fafafa]  flex flex-col items-center justify-center">
      <div className=" flex flex-col items-center gap-y-4">
        <div className="text-primary text-2xl font-bold">
          dbh {productTitle}
        </div>
        <div className="text-4xl font-bold">{subheading}</div>
        <div className="text-center text-lg px-4 lg:px-60">{description}</div>

        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-x-10 gap-y-10 px-[6%]  py-10">
          {productList.map((product) => (
            <ProductCards
              productCategory={product.productCategory}
              productName={product.productName}
              cardDescription={product.cardDescription}
              cardTitle={product.cardTitle}
              image={product.image}
              imageName={product.imageName}
              hideComponent
            />
          ))}
        </div>
      </div>
    </div>
  );
}
