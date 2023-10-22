import React from "react";


const IntroSection = () => {
  return (
    <div  className="flex flex-col my-4">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-40 gap-x-20">
        <div>
          <h1 className="text-2xl mt-4 lg:mt-0 font-bold text-black py-4">About Us</h1>
          <p>
            At <b>dbh</b> , we take pride in being your go-to source for top-quality
            corporate merchandising and promotional giveaways. With a commitment
            to excellence, authenticity, and reliability, we have earned the
            trust of businesses worldwide. Let us help you elevate your brand,
            engage your audience, and make a lasting impression.
            <br/>
            Our reputation is built on authenticity and reliability. We are
            committed to delivering on our promises and exceeding your
            expectations. When you choose <b>dbh </b> , you're choosing a
            partner you can trust.
          </p>
        </div>
        <div className="flex items-center  lg:mt-6">
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

export default IntroSection;