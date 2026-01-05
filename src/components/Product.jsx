import { useEffect as func, useState } from "react";
import Loader from "./loading/Loader";
import AOS from "aos";
import "aos/dist/aos.css";

const BASE_URL = "https://dummyjson.com";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [visibleCount, count] = useState(6);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const predefinedCategories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
  ];

  func(() => {
    AOS.init({ duration: 1000 });
    setLoading(true);

    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/products`);
        const data = await response.json();
        setProducts(data.products);
        setFilterProducts(data.products);
      } catch (err) {
        setError(err);
      }
    };

    const fetchData = async () => {
      await fetchProducts();
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleCategory = (category) => {
    setSelectedCategory(category);
    setFilterProducts(
      category === "all"
        ? products
        : products.filter((product) => product.category === category)
    );
  };

  const twoword = (text) => {
    const words = text.split(" ");
    return words.length > 2 ? `${words.slice(0, 2).join(" ")}...` : text;
  };

  const addCards = () => {
    count(visibleCount + 6);
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
          <a
            href="#"
            onClick={() => handleCategory("all")}
            className={`p-2 border rounded-md ${
              selectedCategory === "all"
                ? "bg-[#DC780B] text-white"
                : "text-[#DC780B]"
            }`}
          >
            All Categories
          </a>
          {predefinedCategories.map((category) => (
            <a
              key={category}
              href="#"
              onClick={() => handleCategory(category)}
              className={`p-2 border rounded-md ${
                selectedCategory === category
                  ? "bg-[#DC780B] text-white"
                  : "text-[#DC780B]"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </a>
          ))}
        </div>
      </div>

      {loading && <Loader />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filterProducts.slice(0, visibleCount).map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-lg p-4"
            data-aos="zoom-in"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-60 object-cover"
            />
            <div className="flex flex-col">
              <div className="flex justify-between items-center my-[20px]">
                <h3 className="font-bold text-[25px]">
                  {twoword(product.title)}
                </h3>
                <p className="font-bold text-[25px]">${product.price}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-4">
                  {product.description}
                </p>
              </div>
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
        ))}
      </div>

      {visibleCount < filterProducts.length && (
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
