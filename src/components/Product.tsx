import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useProducts } from "../hooks/useProducts";
import { useFilterProducts } from "../hooks/useFilteredProducts";
import { ProductType } from "../types/type";
import { predefinedCategories } from "../constants";
import ProductCard from "./ProductCard";
import Loader from "./loading/Loader";

const Product: React.FC = () => {
  const { products, loading, error } = useProducts();

  const { filteredProducts, selectedCategory, handleCategory } =
    useFilterProducts(products);

  const [visibleCount, setVisibleCount] = useState<number>(6);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const twoword = (text: string) => {
    const words = text.split(" ");
    return words.length > 2 ? `${words.slice(0, 2).join(" ")}...` : text;
  };

  const addCards = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="container mx-auto max-w-[1140px] p-4">
      <div className="flex flex-col items-center mb-8">
        <p className="font-medium text-[#DC780B]">MENU</p>
        <h2 className="font-bold text-3xl">Food With A New Passion</h2>
        <p className="text-center w-[750px] mb-16">
          There are many things needed to start the Fast Food Business. You need
          not only food stalls with personnel but also specialized equipment and
          skills to manage customers.
        </p>
        {error && <p className="text-red-500">{error}</p>}
      </div>

      <div className="flex justify-center mb-6">
        <div className="flex space-x-4">
          <button
            onClick={() => handleCategory("all")}
            className={`p-2 border rounded-md ${
              selectedCategory === "all"
                ? "bg-[#DC780B] text-white"
                : "text-[#DC780B]"
            }`}
          >
            All Categories
          </button>
          {predefinedCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategory(category)}
              className={`p-2 border rounded-md ${
                selectedCategory === category
                  ? "bg-[#DC780B] text-white"
                  : "text-[#DC780B]"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {loading && <Loader />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredProducts.slice(0, visibleCount).map((product: ProductType) => (
          <ProductCard key={product.id} product={product} twoword={twoword} />
        ))}
      </div>

      {visibleCount < filteredProducts.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={addCards}
            className="px-6 py-2 rounded-md bg-[#DC780B] text-white hover:bg-white hover:text-[#DC780B] hover:border hover:border-[#dc780b] transition-all duration-300 ease-in-out"
          >
            Learn More
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
