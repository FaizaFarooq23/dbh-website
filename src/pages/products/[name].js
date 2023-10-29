import BaseLayout from "@/components/BaseLayout/baseLayout";
import ProductPage from "@/components/ProductPageComponents/productPage";
import Head from "next/head";
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


  if (loading) {
    return (
      <div className="flex justify-center bg-white w-full items-center h-screen">
        <div role="status">
          <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (!item) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-white overflow-x-hidden">
    <Head>
      <title>{item.cardTitle}</title>
    </Head>
      <BaseLayout>
        <ProductPage item={item} />
      </BaseLayout>
    </div>
  );
}
