import BaseLayout from "@/components/BaseLayout/baseLayout";
import ProductPage from "@/components/ProductPageComponents/productPage";
import { useRouter } from "next/router";
import React from "react";

const productPageList = [
  {
    image: "/images/merchandise.jpg",
    cardTitle: "Merchandise",
    textHeading: "We Supply the Best Merchandise in UAE",
    description1:
      "At our company, we take immense pride in offering a wide range of high-quality merchandise products in the United Arab Emirates.From exquisite fashion items and electronic gadgets to essential household goods, our diverse inventory caters to the unique tastes and preferences of our valued customers. ",
    description2:
      " We source our products from trusted local and international suppliers, ensuring that each item meets rigorous quality standards. With our commitment to excellence, we strive to bring unparalleled shopping experiences to the heart of the UAE, with top-notch customer service and competitive pricing to match.",
    caption:
      "Guaranteeing Merchandise that can transform ordinary objects into extraordinary expressions of style and identity, turning everyday life into a canvas of personal storytelling.",
    importExportImage: "/images/merchandise.jpg",
    quoteTitle: "Merchandise",
    description:
      "Merchandise products add a touch of character and practicality to daily life",
    subheading: "Elevating everyday living with style and substance",
  },
];

export default function ProductName() {
  const { name } = useRouter().query;
  const [item, setItem] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const item = productPageList.find(
      (item) => item.cardTitle.toLowerCase() === name
    );
    setItem(item);

    // set loading to false after 1 second
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [name]);
  const Spinner = () => (
    <div className="w-16 h-16 border-t-4 border-secondary border-solid rounded-full animate-spin"></div>
  );

  if (loading) {
    return (
        <div className="flex items-center justify-center my-20 h-[80vh]">
        <Spinner />
      </div> 
    );
  }

  if (!item) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-white overflow-x-hidden">
      <BaseLayout>
        <ProductPage item={item} />
      </BaseLayout>
    </div>
  );
}
