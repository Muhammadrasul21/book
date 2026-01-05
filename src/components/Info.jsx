import React from "react";
import woman from "../assets/maskGroup.svg";
import { FaStar } from "react-icons/fa";
const Info = () => {
  return (
    <div className="container mx-auto max-w-[1140px] p-4">
      <div className="mt-[100px] flex flex-col items-center">
        <div className="flex flex-col items-center mb-8 text-center">
          <p className="font-medium text-[#DC780B]">Testimonial</p>
          <h2 className="font-bold text-3xl mb-6 text-center">
            Making Food Great Again and Again
          </h2>
          <p className="text-center w-full md:w-[750px] mb-16">
            You need not only just food stalls with personnel but also
            specialized equipment, skills to manage customers, effective product
            catalogs, etc., to succeed.
          </p>
          <img src={woman} className="w-20 h-20 mb-8 md:mb-0 rounded-full" />
          <p className="mb-5 mt-[42px] w-[506px]">
            You need not only just food stalls with personnel but also
            specialized equipment, skills to manage customers, effective product
            catalogs, etc., to achieve success.
          </p>
          <div className="flex mb-[50px]">
            <FaStar className="text-[#DC780B]" />
            <FaStar className="text-[#DC780B]" />
            <FaStar className="text-[#DC780B]" />
            <FaStar className="text-[#DC780B]" />
            <FaStar />
          </div>
          <p className="font-bold leading-6">Augusta W. Reynoso</p>
          <p className="text-gray-500">UI & UX Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
