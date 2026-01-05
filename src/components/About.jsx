import React from "react";
import girl from "../assets/girl.png";
const About = () => {
  return (
    <div className="mb-[115px]">
      <div className="container mx-auto max-w-[1140px] p-4">
        <div className="flex justify-between items-center">
          <div>
            <img src={girl} alt="" />
          </div>
          <div className="w-[488px]">
            <span className="text-[#DC780B] tracking-widest">ABOUT US</span>
            <h4 className="mt-[10px] mb-8 font-bold text-3xl">
              Food Stalls with Persons but to Product marketing plane catlogues
              etc to.
            </h4>
            <p className="mb-7">
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also equipment
              make your marketing plane Effective.
            </p>
            <button className="w-40 h-11 rounded-md bg-[#DC780B] text-white hover:bg-white hover:text-[#DC780B] hover:border hover:border-[#dc780b] transition-all duration-300 ease-in-out">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
