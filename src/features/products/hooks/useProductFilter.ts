import { useState, useMemo } from "react";
import type { Product, FilterOptions, ProductCategory } from "../../../types";

const INITIAL_FILTERS: FilterOptions = {
  category: "all",
  minPrice: 0,
  maxPrice: 500,
  sortBy: "featured",
  searchQuery: "",
  inStockOnly: false,
};

export const useProductFilter = (initialProducts: Product[]) => {
  const [filters, setFilters] = useState<FilterOptions>(INITIAL_FILTERS);

  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter((product) => {
        if (
          filters.category !== "all" &&
          product.category !== filters.category
        ) {
          return false;
        }

        if (
          filters.searchQuery &&
          !product.name
            .toLowerCase()
            .includes(filters.searchQuery.toLowerCase()) &&
          !product.description
            .toLowerCase()
            .includes(filters.searchQuery.toLowerCase())
        ) {
          return false;
        }

        if (
          product.price < filters.minPrice ||
          product.price > filters.maxPrice
        ) {
          return false;
        }

        if (filters.inStockOnly && !product.inStock) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (filters.sortBy === "price-low") return a.price - b.price;
        if (filters.sortBy === "price-high") return b.price - a.price;
        if (filters.sortBy === "newest")
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);

        return 0;
      });
  }, [initialProducts, filters]);

  const setCategory = (category: ProductCategory | "all") =>
    setFilters((prev) => ({ ...prev, category }));

  const setSearchQuery = (searchQuery: string) =>
    setFilters((prev) => ({ ...prev, searchQuery }));

  const setSortBy = (sortBy: FilterOptions["sortBy"]) =>
    setFilters((prev) => ({ ...prev, sortBy }));

  const resetFilters = () => setFilters(INITIAL_FILTERS);

  return {
    filters,
    filteredProducts,
    setCategory,
    setSearchQuery,
    setSortBy,
    resetFilters,
  };
};
