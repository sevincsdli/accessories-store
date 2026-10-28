import { MOCK_PRODUCTS } from "../data/mockProducts";
import { useProductFilter } from "../features/products/hooks/useProductFilter";
import { ProductFilterBar } from "../features/products/components/ProductFilterBar";
import { ProductGrid } from "../features/products/components/ProductGrid";
import type { Product } from "../types";

interface ShopPageProps {
  onOpenDetail: (product: Product) => void;
}

export const ShopPage = ({ onOpenDetail }: ShopPageProps) => {
  const { filters, filteredProducts, setCategory, setSortBy } =
    useProductFilter(MOCK_PRODUCTS);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-10">
      <div className="text-center space-y-3 border-b border-brand-beige/50 pb-10">
        <span className="text-[10px] tracking-[0.3em] uppercase text-brand-accent font-bold">
          Explore All
        </span>
        <h1 className="text-3xl sm:text-5xl font-light tracking-widest uppercase text-brand-dark">
          Our Collection
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted max-w-lg mx-auto font-light leading-relaxed">
          Discover our full range of artisan jewelry pieces, carefully designed
          for everyday luxury and timeless elegance.
        </p>
      </div>

      <ProductFilterBar
        activeCategory={filters.category}
        activeSort={filters.sortBy}
        onSelectCategory={setCategory}
        onSelectSort={setSortBy}
        totalResults={filteredProducts.length}
      />

      <ProductGrid products={filteredProducts} onOpenDetail={onOpenDetail} />
    </div>
  );
};
