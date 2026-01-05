import React from "react";

const features = [
  {
    icon: "🏠",
    title: "Quality Food",
    description:
      "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
  },
  {
    icon: "🛵",
    title: "Food Delivery",
    description:
      "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
  },
  {
    icon: "😋",
    title: "Super Taste",
    description:
      "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
  },
];

const Delivery = () => {
  return (
    <div className="container mx-auto max-w-[1140px] p-4 mb-[123px]">
      <div className="flex flex-col items-center mb-8">
        <p className="font-medium text-[#DC780B]">Features</p>
        <h2 className="font-bold text-3xl">Food With A New Passion</h2>
      </div>
      <div className="flex justify-center gap-[90px]">
        {features.map((feature, index) => (
          <div key={index} className="text-center max-w-[300px] p-4">
            <div className="text-6xl mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Delivery;
