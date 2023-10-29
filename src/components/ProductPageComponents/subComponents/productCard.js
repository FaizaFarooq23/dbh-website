import ProductCards from "@/components/TradeProducts/subComponents/cards";
import React from "react";

export default function Card({ productTitle, description, subheading, productList }) {
  return (
    <div className=" my-10 py-8 bg-[#fafafa]  flex flex-col items-center justify-center ">
      <div className=" flex flex-col items-center gap-y-4">
        <div className="text-primary  text-2xl font-bold text-center ">
          dbh {productTitle}
        </div>
        <div className="text-4xl font-bold text-center px-4 lg:px-0  ">{subheading}</div>
        <div className="text-center text-lg px-4 lg:px-60 ">{description}</div>

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
