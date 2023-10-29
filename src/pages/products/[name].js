import BaseLayout from "@/components/BaseLayout/baseLayout";
import Error from "@/components/Error";
import ProductPage from "@/components/ProductPageComponents/productPage";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const productPageList = [
  {
    image: "/images/productPageImages/merchandise/merchandise.jpg",
    cardTitle: "Merchandise",
    textHeading: "We Supply the Best Merchandise in UAE",
    description1:
      "At our company, we take immense pride in offering a wide range of high-quality merchandise products in the United Arab Emirates.From exquisite fashion items and electronic gadgets to essential household goods, our diverse inventory caters to the unique tastes and preferences of our valued customers. ",
    description2:
      " We source our products from trusted local and international suppliers, ensuring that each item meets rigorous quality standards. With our commitment to excellence, we strive to bring unparalleled shopping experiences to the heart of the UAE, with top-notch customer service and competitive pricing to match.",
    caption:
      "Guaranteeing Merchandise that can transform ordinary objects into extraordinary expressions of style and identity, turning everyday life into a canvas of personal storytelling.",
    importExportImage: "/images/productPageImages/merchandise/merchandise.jpg",
    quoteTitle: "Merchandise",
    description:
      "Merchandise products add a touch of character and practicality to daily life",
    subheading: "Elevating everyday living with style and substance",
    productList: [
      {
        image: "/images/productPageImages/merchandise/gifts.jpg",
        cardTitle: "Corporate Gifts",
        cardDescription:
          " Show your appreciation to clients and employees with thoughtfully crafted corporate gifts that showcase your gratitude.",
      },
      {
        image: "/images/productPageImages/merchandise/items.jpg",
        cardTitle: "Promotional Items",
        cardDescription:
          "Make a statement at trade shows and events with eye-catching promotional items that leave a lasting impression.      ",
      },
      {
        image: "/images/productPageImages/merchandise/apperal.jpg",

        cardTitle: "Branded Apparel",
        cardDescription:
          " Elevate your team's look with custom-designed uniforms and corporate apparel that reflect your brand's identity.",
      },
      {
        image: "/images/productPageImages/merchandise/giveaway.jpg",

        cardTitle: "Unique Giveaways",
        cardDescription:
          "Create buzz around your brand with innovative and unique giveaway ideas that capture attention.",
      },
    ],
  },
  {
    image: "/images/productPageImages/hospitality/hospitality-hero-image.jpg",
    cardTitle: "Hospitality-Hotel Supply",
    textHeading: "We Supply the Best Hospitality Products in UAE",
    description1:
      "At our company, we take immense pride in offering a wide range of high-quality hospitality products in the United Arab Emirates. From exquisite fashion items and electronic gadgets to essential household goods, our diverse inventory caters to the unique tastes and preferences of our valued customers. ",
    description2:
      " We source our products from trusted local and international suppliers, ensuring that each item meets rigorous quality standards. With our commitment to excellence, we strive to bring unparalleled shopping experiences to the heart of the UAE, with top-notch customer service and competitive pricing to match.",
    caption:
      "Guaranteeing Hospitality products that can transform ordinary objects into extraordinary expressions of style and identity, turning everyday life into a canvas of personal storytelling.",
    importExportImage:
      "/images/productPageImages/hospitality/hospitality-import-image.jpg",
    quoteTitle: "Hospitality",
    description:
      "Hospitality products add a touch of character and practicality to daily life",
    subheading: "Our Hospitality Products Include",
    productList: [
      {
        image: "/images/productPageImages/hospitality/glassware.jpg",
        cardTitle: "Glassware",
        cardDescription:
          "A varied selection of glassware for various occasions, featuring gourmet, lead-free crystal, and trendy options.",
      },
      {
        image: "/images/productPageImages/hospitality/linen.jpg",
        cardTitle: "Linen",
        cardDescription:
          "A broad range of linen products, spanning from pool linens to encompassing bed linens, bath linens, and table linens.",
      },
      {
        image: "/images/productPageImages/hospitality/kitchenware.jpg",
        cardTitle: "Kitchenware",
        cardDescription:
          "We deliver different types kitchenware products, including cookware, cutlery, utensils and all other kitchen appliances.",
      },
      {
        image: "/images/productPageImages/hospitality/trolley.jpg",
        cardTitle: "Trolley",
        cardDescription:
          "At dbh you can find different types of trolleys, including housekeeping trolleys, luggage trolleys, and service trolleys.",
      },
    ],
  },
  {
    image: "/images/productPageImages/foodstuff/foodstuff-hero.jpg",
    cardTitle: "Foodstuff",
    textHeading: "We Supply the Best Foodstuff Products in UAE",
    description1:
      "At our company, we take immense pride in offering a wide range of high-quality foodstuff products in the United Arab Emirates. From exquisite fashion items and electronic gadgets to essential household goods, our diverse inventory caters to the unique tastes and preferences of our valued customers. ",
    description2:
      " We source our products from trusted local and international suppliers, ensuring that each item meets rigorous quality standards. With our commitment to excellence, we strive to bring unparalleled shopping experiences to the heart of the UAE, with top-notch customer service and competitive pricing to match.",
    caption:
      "Guaranteeing Foodstuff preserving the best taste and quality of the products.",
    importExportImage:
      "/images/productPageImages/foodstuff/foodstuff-import.jpg",
    quoteTitle: "Foodstuff",
    description:
      " Foodstuff trading company guarantees that you receive the specific goods you desire.",
    subheading: "Our Foodstuff Products Include",
    productList: [
      {
        image: "/images/productPageImages/foodstuff/grains.jpg",
        cardTitle: "Grains",
        cardDescription:
          "We deliver different types of grains, including chickpeas, lentils, and beans.",
      },
      {
        image: "/images/productPageImages/foodstuff/rice.jpg",
        cardTitle: "Rice",
        cardDescription:
          "We deliver different types of rice, including Basmati rice, Jasmine rice, and Sella rice.",
      },

      {
        image: "/images/productPageImages/foodstuff/spices.jpg",
        cardTitle: "Spices",
        cardDescription:
          "We deliver different types of spices, including black pepper, cinnamon, and cardamom.",
      },
      {
        image: "/images/productPageImages/foodstuff/dry-fruits.jpg",
        cardTitle: "Dry Fruits",
        cardDescription:
          "We deliver different types of dry fruits, including almonds, cashews, and raisins.",
      },
    ],
  },
  {
    image:
      "/images/productPageImages/computer-accessories/computer-hero-image.jpg",
    cardTitle: "Computer Accessories",
    textHeading: "We Supply the Best Computer Accessories in UAE",
    description1:
      "At our company, we take immense pride in offering a wide range of high-quality computer accessories in the United Arab Emirates. From exquisite fashion items and electronic gadgets to essential household goods, our diverse inventory caters to the unique tastes and preferences of our valued customers. ",
    description2:
      " We source our products from trusted local and international suppliers, ensuring that each item meets rigorous quality standards. With our commitment to excellence, we strive to bring unparalleled shopping experiences to the heart of the UAE, with top-notch customer service and competitive pricing to match.",
    caption: "Guaranteeing Computer Accessories that can transform the world.",
    importExportImage:
      "/images/productPageImages/computer-accessories/computer-import.jpg",
    quoteTitle: "Computer Accessories",
    description:
      "Enhance your digital experience with a diverse range of computer accessories.",
    subheading: "Our Computer Hardware and Accessorices Product Line",
    productList: [
      {
        image: "/images/productPageImages/computer-accessories/keyboards.jpg",
        cardTitle: "Keyboard",
        cardDescription:
          "Discover our extensive keyboard offerings, featuring a wide array of options including both wired and wireless keyboards.",
      },

      {
        image: "/images/productPageImages/computer-accessories/headphones.jpg",
        cardTitle: "Headphones",
        cardDescription:
          "Enhance your listening experience with our extensive headphones providing exceptional sound to match your personal preferences.",
      },
      {
        image: "/images/productPageImages/computer-accessories/mouse.jpg",
        cardTitle: "Mouse",
        cardDescription:
          "  We have diverse collection of mice, ranging from wired to wireless options. Elevate your computing experience with our high-performance precision solutions.",
      },
      {
        image: "/images/productPageImages/computer-accessories/cables.jpg",
        cardTitle: "Monitor",
        cardDescription:
          "Unlock seamless connectivity and reliability with our high-quality computer cables.",
      },
    ],
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
    return (
      <div>
        <Error />
      </div>
    );
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
