import React from "react";
import { ProductCardProps } from "../types/type";

const ProductCard: React.FC<ProductCardProps> = ({ product, twoword }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4" data-aos="zoom-in">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-60 object-cover"
      />
      <div className="flex flex-col">
        <div className="flex justify-between items-center my-[20px]">
          <h3 className="font-bold text-[25px]">{twoword(product.title)}</h3>
          <p className="font-bold text-[25px]">${product.price}</p>
        </div>
        <p className="text-sm text-gray-500 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <button
            aria-label="Add product to cart"
            className="w-9 h-[34px] rounded-md bg-[#DC780B] text-white hover:bg-white hover:text-[#DC780B] hover:border hover:border-[#dc780b] transition-all duration-300 ease-in-out"
          >
            +
          </button>
          <div className="text-yellow-500">
            {"★".repeat(Math.round(product.rating))}{" "}
            <span className="text-gray-300">
              {"★".repeat(5 - Math.round(product.rating))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
