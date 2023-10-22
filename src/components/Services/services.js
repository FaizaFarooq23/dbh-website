import React from "react";
import IconWithText from "./subComponent/iconWithText";

export default function Services() {
  const services = [
    {
      image: "/images/import.png",
      title: "Import and Export",
      description:
        "dbh export services promotes global expansion, offering expertise in international markets.Our import services optimize sourcing, ensuring efficient clearence",
    },
    {
      image: "/images/delivery.png",
      title: "Shipping",
      description:
        "Our shipping service is a professional logistics solution that facilitates the transportation of goods and packages from one location to another.",
    },
    {
      image: "/images/deal.png",
      title: "Procrument",
      description:
        "We provide procurement services to our clients. We help our clients to procure the best quality products at the best price.",
    },
    {
      image: "/images/ecommerce.png",
      title: "E-commerce",
      description:
        "dbh offers complete online solutions, specializing in product presentation, search optimization, ecommerce consulting, and fair-priced online product transactions.",
    },
  ];

  return (
    <div className=" pb-8 lg:pb-20">
      <div className=" flex flex-col items-center gap-y-4">
        <div className="text-primary text-2xl font-bold">Our Services</div>
        <div className="text-4xl text-center font-bold">
          We offer many services to progress!
        </div>
        <div className="text-center text-lg px-4 lg:px-60">
          We offer the following services to clients worldwide and in the United
          Arab Emirates.
        </div>
      </div>

      <div className="flex flex-col lg:flex-row pt-8 lg:pt-16 px-20 gap-y-6 lg:gap-x-6 ">
        {services.map((service, index) => (
          <IconWithText
          key={index}
            image={service.image}
            description={service.description}
            title={service.title}
          />
        ))}{" "}
      </div>
    </div>
  );
}
