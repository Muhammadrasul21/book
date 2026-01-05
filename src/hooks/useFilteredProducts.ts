import { useState, useEffect } from "react";
import { ProductType } from "../types/type";

export const useFilterProducts = (
  products: ProductType[],
  initialCategory: string = "all"
) => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>(initialCategory);
  const [filteredProducts, setFilteredProducts] =
    useState<ProductType[]>(products);

  useEffect(() => {
    setFilteredProducts(
      selectedCategory === "all"
        ? products
        : products.filter(
            (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
          )
    );
  }, [products, selectedCategory]);

  const handleCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return {
    filteredProducts,
    selectedCategory,
    handleCategory,
  };
};
