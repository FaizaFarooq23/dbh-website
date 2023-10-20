import React from "react";

export default function NavBar() {
  const navList = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Contact Us",
      link: "/contact",
    },
  ];

  return (
    <nav className="flex justify-between rounded-lg bg-white px-8 py-3 w-[90%] shadow-lg z-50">
      <div className="flex items-center gap-x-16">
        {navList.map((item, index) => (
          <div key={index} className="nav-item font-semibold cursor-pointer">
            {item.title}
          </div>
        ))}
      </div>
      <div>
        <button className="bg-secondary nav-button shadow-xl text-white font-semibold hover:bg-primary rounded-lg px-4 py-3 cursor-pointer">
          Get a quote now
        </button>
      </div>
    </nav>
  );
}
