import React from "react";

export default function IntroSection() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-40 gap-x-20">
        <div>
          <h1 className="text-2xl font-bold py-4">Our Vision:</h1>
          <p>
            Our vision is to continue innovating and expanding, both in terms of
            our product offerings and our geographic reach. We aim to be the go-to
            partner for businesses looking to make a meaningful impact through
            promotional items.
          </p>
          <h1 className="text-2xl font-bold py-4">Our Commitment:</h1>
          <p>
            Quality, creativity, and customer satisfaction are at the core of
            everything we do. We take pride in delivering high-quality promotional
            solutions that help our clients enhance their brand visibility and
            achieve their marketing goals.
          </p>
        </div>
        <div className="flex items-center mt-6">
          <img
            src="/images/supply-chain-network.jpg"
            className="h-[240px] w-[1400px]"
            alt="trade-network"
          />
        </div>
      </div>
      {/* <div className=""   >
      <img src="/images/slopy-lines.svg" alt="lines"/>
      </div> */}
    </div>
  );
}
