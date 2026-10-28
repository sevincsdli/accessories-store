import { useState } from "react";
import type { Product } from "../../../types";
import { formatCurrency } from "../../../utils/formatters";
import { useCart } from "../../cart/hooks/useCart";
import { useToast } from "../../../hooks/useToast";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import { X, Plus, Minus, ShoppingBag, Star, Check } from "lucide-react";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal = ({
  product,
  onClose,
}: ProductDetailModalProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { showToast } = useToast();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showToast(`${quantity}x "${product.name}" has been added to your cart`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-brand-dark transition-colors cursor-pointer rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Gallery Column */}
        <div className="w-full md:w-1/2 bg-brand-light p-6 flex flex-col justify-between">
          <div className="aspect-square relative overflow-hidden bg-white mb-4">
            <img
              src={product.images[selectedImage] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  aria-label={`View product image ${idx + 1}`}
                  className={`w-16 h-16 border-2 shrink-0 cursor-pointer overflow-hidden ${
                    selectedImage === idx
                      ? "border-brand-dark"
                      : "border-transparent opacity-60"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details Column */}
        <div className="w-full md:w-1/2 p-8 overflow-y-auto flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] tracking-[0.2em] uppercase text-brand-accent font-bold">
                {product.category}
              </span>

              {product.isBestSeller && (
                <Badge variant="accent">Best Seller</Badge>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-light uppercase tracking-wider text-brand-dark">
              {product.name}
            </h2>

            <div className="flex items-center gap-3">
              <span className="text-xl font-semibold text-brand-dark">
                {formatCurrency(product.price)}
              </span>

              {product.originalPrice &&
                product.originalPrice > product.price && (
                  <span className="text-sm text-brand-muted line-through">
                    {formatCurrency(product.originalPrice)}
                  </span>
                )}

              <div className="flex items-center gap-1 text-xs text-amber-500 ml-auto">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="font-medium text-brand-dark">
                  {product.rating}
                </span>
              </div>
            </div>

            <p className="text-xs text-brand-muted leading-relaxed font-light">
              {product.description}
            </p>

            {/* Product Details */}
            <div className="border-t border-brand-beige/50 pt-4 space-y-2">
              <h4 className="text-xs uppercase font-semibold text-brand-dark tracking-wider">
                Product Details:
              </h4>

              <ul className="space-y-1.5">
                {product.details.map((detail, i) => (
                  <li
                    key={i}
                    className="text-xs text-brand-muted flex items-center gap-2"
                  >
                    <Check className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Section */}
          <div className="border-t border-brand-beige/50 pt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-medium text-brand-dark">
                Quantity:
              </span>

              <div className="flex items-center gap-3 border border-brand-beige px-3 py-1.5">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="text-brand-dark hover:text-brand-accent cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>

                <span className="text-xs font-semibold w-6 text-center">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="text-brand-dark hover:text-brand-accent cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <Button onClick={handleAddToCart} className="w-full gap-2">
              <ShoppingBag className="w-4 h-4" />
              Add to Cart • {formatCurrency(product.price * quantity)}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
