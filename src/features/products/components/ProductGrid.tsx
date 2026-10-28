import type { Product } from "../../../types";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onOpenDetail?: (product: Product) => void;
}

export const ProductGrid = ({ products, onOpenDetail }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-brand-muted text-sm uppercase tracking-wider">
          No products found matching your search.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 pt-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onOpenDetail={onOpenDetail}
        />
      ))}
    </div>
  );
};
