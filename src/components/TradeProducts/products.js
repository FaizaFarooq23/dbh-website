import React from "react";
import ProductCards from "./subComponents/cards";

export default function Products() {
  const productList = [
    {
      image: "/images/gifts.jpg",
      imageName: "Corporate Gifts ",
      productName: "Gifts",
      link: "",
      productCategory: "Gifts",
      cardTitle: "Corporate Gifts ",
      cardDescription: "desp",
      productlink: "",
    },
    {
      image: "/images/gadgets.jpg",
      imageName: "image2",
      productName: "Product 2",
      link: "",
      productCategory: "Category 2",
      cardTitle: "Card Title 2",
      cardDescription: "Card Description 2",
      productlink: "",
    },
    {
      image: "/images/machinery-equipment.jpg",
      imageName: "image3",
      productName: "Product 3",
      link: "",
      productCategory: "Category 3",
      cardTitle: "Card Title 3",
      cardDescription: "Card Description 3",
      productlink: "",
    },
    {
      image: "/images/design-printsolutions.jpg",
      imageName: "image4",
      productName: "Product 4",
      link: "",
      productCategory: "Category 4",
      cardTitle: "Card Title 4",
      cardDescription: "Card Description 4",
      productlink: "",
    },
    {
      image: "/images/bags.jpg",
      imageName: "image5",
      productName: "Product 5",
      link: "",
      productCategory: "Category 5",
      cardTitle: "Card Title 5",
      cardDescription: "Card Description 5",
      productlink: "",
    },
    {
      image: "/images/stationary.jpg",
      imageName: "image6",
      productName: "Product 6",
      link: "",
      productCategory: "Category 6",
      cardTitle: "Card Title 6",
      cardDescription: "Card Description 6",
      productlink: "",
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
      <div className="grid grid-cols-3 gap-x-10 gap-y-10   py-10">
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
