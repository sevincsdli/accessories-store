import { useState } from "react";
import type { Product } from "../../../types";
import { formatCurrency } from "../../../utils/formatters";
import { useCart } from "../../cart/hooks/useCart";
import { useToast } from "../../../hooks/useToast";
import { Badge } from "../../../components/ui/Badge";
import { Button } from "../../../components/ui/Button";
import { ShoppingBag, Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onOpenDetail?: (product: Product) => void;
}

export const ProductCard = ({ product, onOpenDetail }: ProductCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const hasDiscount =
    product.originalPrice && product.originalPrice > product.price;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    showToast(`"${product.name}" has been added to your cart`);
  };

  return (
    <div
      onClick={() => onOpenDetail?.(product)}
      className="group flex flex-col overflow-hidden rounded-xl border border-brand-beige/70 bg-white shadow-sm transition-all duration-300 hover:shadow-xl cursor-pointer"
    >
      <div
        className="relative aspect-4/5 bg-brand-light overflow-hidden rounded-t-xl transition-all duration-500 hover:scale-[1.02]"
        onMouseEnter={() => product.images.length > 1 && setCurrentImage(1)}
        onMouseLeave={() => setCurrentImage(0)}
      >
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {product.isNew && <Badge variant="dark">NEW</Badge>}
          {product.isBestSeller && <Badge variant="accent">BESTSELLER</Badge>}
          {hasDiscount && <Badge variant="neutral">SALE</Badge>}
        </div>

        <img
          src={product.images[currentImage] || product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          loading="lazy"
        />

        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-linear-to-t from-black/20 to-transparent">
          <Button
            onClick={handleQuickAdd}
            className="w-full gap-2 shadow-lg"
            size="sm"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="px-4 pt-4 pb-5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] text-brand-muted mb-1">
            <span className="uppercase tracking-widest">
              {product.category}
            </span>

            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>
                {product.rating} ({product.reviewsCount})
              </span>
            </div>
          </div>

          <h3 className="text-xs font-medium text-brand-dark uppercase tracking-wider line-clamp-1 group-hover:text-brand-accent transition-colors">
            {product.name}
          </h3>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm font-semibold text-brand-dark">
            {formatCurrency(product.price)}
          </span>

          {hasDiscount && (
            <span className="text-xs text-brand-muted line-through">
              {formatCurrency(product.originalPrice!)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
