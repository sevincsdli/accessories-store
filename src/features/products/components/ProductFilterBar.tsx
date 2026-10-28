import { ChevronDown } from "lucide-react";
import type { ProductCategory, FilterOptions } from "../../../types";
import { cn } from "../../../utils/cn";

interface ProductFilterBarProps {
  activeCategory: ProductCategory | "all";
  activeSort: FilterOptions["sortBy"];
  onSelectCategory: (cat: ProductCategory | "all") => void;
  onSelectSort: (sort: FilterOptions["sortBy"]) => void;
  totalResults: number;
}

const CATEGORIES: { label: string; value: ProductCategory | "all" }[] = [
  { label: "All Products", value: "all" },
  { label: "Necklaces", value: "necklaces" },
  { label: "Rings", value: "rings" },
  { label: "Earrings", value: "earrings" },
  { label: "Bracelets", value: "bracelets" },
];

export const ProductFilterBar = ({
  activeCategory,
  activeSort,
  onSelectCategory,
  onSelectSort,
  totalResults,
}: ProductFilterBarProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-brand-beige/50">
      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onSelectCategory(cat.value)}
            className={cn(
              "px-4 py-3 text-[10px] uppercase tracking-[0.2em] font-medium whitespace-nowrap transition-all border cursor-pointer",
              activeCategory === cat.value
                ? "bg-brand-dark text-white border-brand-dark shadow-sm"
                : "bg-white text-brand-dark border-brand-beige hover:border-brand-dark hover:bg-brand-light",
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results Count & Sort Dropdown */}
      <div className="flex items-center justify-between md:justify-end gap-4 md:gap-6 text-[10px] uppercase tracking-[0.2em] text-brand-muted">
        <span className="whitespace-nowrap">{totalResults} products found</span>

        <div className="relative">
          <select
            value={activeSort}
            onChange={(e) =>
              onSelectSort(e.target.value as FilterOptions["sortBy"])
            }
            className="appearance-none bg-transparent border border-brand-beige px-4 py-3 pr-9 text-brand-dark focus:outline-none focus:border-brand-dark uppercase tracking-[0.2em] text-[10px] cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest Arrivals</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-dark" />
        </div>
      </div>
    </div>
  );
};
