import React from "react";
import ProductCards from "./subComponents/cards";

export default function Products() {
  const productList = [
    {
      image: "/images/gifts.jpg",
      imageName: "Corporate Gifts",
      productName: "Gifts",
      link: "",
      productCategory: "Gifts",
      cardTitle: "Corporate Gifts",
      cardDescription: " Show your appreciation to clients and employees with thoughtfully crafted corporate gifts that showcase your gratitude.",
      productlink: "",
    },
    {
      image: "/images/items.jpg",
      imageName: "Promotional Items",
      productName: "Promotional Items",
      link: "",
      productCategory: "Promotional Items",
      cardTitle: "Promotional Items",
      cardDescription: "Make a statement at trade shows and events with eye-catching promotional items that leave a lasting impression.      ",
      productlink: "",
    },
    {
      image: "/images/apperal.jpg",
      imageName: "Branded Apparel",
      productName: "Branded Apparel ",
      link: "",
      productCategory: "Branded Apparel",
      cardTitle: "Branded Apparel",
      cardDescription: " Elevate your team's look with custom-designed uniforms and corporate apparel that reflect your brand's identity.",
      productlink: "",
    },
{
      image: "/images/giveaway.jpg",
      imageName: "Unique Giveaways",
      productName: "Unique Giveaways",
      link: "",
      productCategory: "Gadgets",
      cardTitle: "Unique Giveaways",
      cardDescription: "Create buzz around your brand with innovative and unique giveaway ideas that capture attention.",
}
  ];
  return (
    <div className=" my-10 py-8 bg-[#fafafa]  flex flex-col items-center justify-center">
      <div className=" flex flex-col items-center gap-y-4">
        <div className="text-primary text-2xl font-bold">dbh Products</div>
        <div className="text-4xl font-bold">Our Product Line</div>
        <div className="text-center text-lg  px-60">
          At dbh we offer a diverse range of high-quality promotional items,
          from branded merchandise to safety products, including but not limited
          to the following:
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-10 gap-y-10 px-[6%]  py-10">
      {productList.map((product,index) => (
        <div className="" key={index}>
          <ProductCards
            productCategory={product.productCategory}
            productName={product.imageName}
            productlink={product.productlink}
            link={product.link}
            cardDescription={product.cardDescription}
            cardTitle={product.cardTitle}
            image={product.image}
            imageName={product.imageName}
          />
          </div>
      
      ))}
        </div>
    </div>
  );
}
