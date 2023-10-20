import React, { useState } from "react";

export default function IconWithText({ image, title, description }) {
  const [isHovered, setIsHovered] = useState(false);
  const containerStyles = {
    transition: 'transform 0.3s',
    transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
  };
  return (
    <div
      className=" flex flex-col items-center gap-y-4 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
        style={containerStyles}
    >
      <div>
        <img src={image} className={`h-20 w-20 transition-transform transform ${
            isHovered ? "icon-spin" : ""
          }`}/>
      </div>
      <div className="text-lg font-bold">
        <span>{title}</span>
      </div>
      <div className="text-center ">
        <span>{description}</span>
      </div>
    </div>
  );
}
