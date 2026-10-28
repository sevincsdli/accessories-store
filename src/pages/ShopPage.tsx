import { MOCK_PRODUCTS } from "../data/mockProducts";
import { useProductFilter } from "../features/products/hooks/useProductFilter";
import { ProductFilterBar } from "../features/products/components/ProductFilterBar";
import { ProductGrid } from "../features/products/components/ProductGrid";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import type { Product } from "../types";

interface ShopPageProps {
  onOpenDetail: (product: Product) => void;
}

export const ShopPage = ({ onOpenDetail }: ShopPageProps) => {
  const [pageRef, pageVisible] = useRevealOnScroll<HTMLDivElement>();
  const { filters, filteredProducts, setCategory, setSortBy } =
    useProductFilter(MOCK_PRODUCTS);

  return (
    <div
      ref={pageRef}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-10 transition-all duration-700 ease-out ${
        pageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
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
