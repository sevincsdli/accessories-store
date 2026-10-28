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
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-brand-beige/50">
      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onSelectCategory(cat.value)}
            className={cn(
              "px-4 py-2 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all border cursor-pointer",
              activeCategory === cat.value
                ? "bg-brand-dark text-white border-brand-dark"
                : "bg-white text-brand-dark border-brand-beige hover:border-brand-dark",
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results Count & Sort Dropdown */}
      <div className="flex items-center justify-between md:justify-end gap-6 text-xs text-brand-muted">
        <span>{totalResults} products found</span>

        <select
          value={activeSort}
          onChange={(e) =>
            onSelectSort(e.target.value as FilterOptions["sortBy"])
          }
          className="bg-transparent border border-brand-beige px-3 py-2 text-brand-dark focus:outline-none focus:border-brand-dark uppercase tracking-wider text-xs cursor-pointer"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="newest">Newest Arrivals</option>
        </select>
      </div>
    </div>
  );
};
