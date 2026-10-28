import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MOCK_PRODUCTS } from "../data/mockProducts";
import { formatCurrency } from "../utils/formatters";
import { useCart } from "../features/cart/hooks/useCart";
import { useToast } from "../hooks/useToast";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { ProductCard } from "../features/products/components/ProductCard";
import {
  Plus,
  Minus,
  ShoppingBag,
  Star,
  Check,
  ArrowLeft,
  ShieldCheck,
  Truck,
  RefreshCw,
} from "lucide-react";

export const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product =
    MOCK_PRODUCTS.find((p) => p.slug === slug) || MOCK_PRODUCTS[0];

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showToast(`${quantity}x "${product.name}" added to cart`);
  };

  const relatedProducts = MOCK_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id,
  ).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-16">
      {/* Breadcrumb / Back Link */}
      <Link
        to="/shop"
        className="inline-flex items-center gap-2 text-xs text-brand-muted hover:text-brand-dark uppercase tracking-wider transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Shop
      </Link>

      {/* Main Product View */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-start">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-brand-light relative overflow-hidden rounded-2xl shadow-sm transition-shadow duration-300 hover:shadow-xl">
            <img
              src={product.images[selectedImage] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 border-2 cursor-pointer overflow-hidden transition-all ${
                    selectedImage === idx
                      ? "border-brand-dark opacity-100"
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

        {/* Product Details */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-brand-accent font-bold">
                {product.category}
              </span>
              {product.isBestSeller && (
                <Badge variant="accent">Best Seller</Badge>
              )}
            </div>
            <h1 className="text-2xl sm:text-4xl font-light uppercase tracking-wider text-brand-dark">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 pt-2">
              <span className="text-2xl font-semibold text-brand-dark">
                {formatCurrency(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-brand-muted line-through">
                  {formatCurrency(product.originalPrice)}
                </span>
              )}
              <div className="flex items-center gap-1 text-xs text-amber-500 ml-auto">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="font-medium text-brand-dark">
                  {product.rating}
                </span>
                <span className="text-brand-muted">
                  ({product.reviewsCount} reviews)
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light border-t border-b border-brand-beige/50 py-4">
            {product.description}
          </p>

          {/* Features */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-semibold text-brand-dark tracking-wider">
              Product Highlights
            </h3>
            <ul className="space-y-2">
              {product.details.map((detail, i) => (
                <li
                  key={i}
                  className="text-xs text-brand-muted flex items-center gap-2"
                >
                  <Check className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="pt-4 space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex items-center gap-3 border border-brand-beige px-4 py-2.5 self-start sm:self-auto">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="text-brand-dark hover:text-brand-accent cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-xs font-semibold w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="text-brand-dark hover:text-brand-accent cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <Button
                onClick={handleAddToCart}
                size="lg"
                className="w-full gap-2 sm:flex-1"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart • {formatCurrency(product.price * quantity)}
              </Button>
            </div>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 gap-4 pt-6 border-t border-brand-beige/50 text-center sm:grid-cols-3">
            <div className="space-y-1">
              <Truck className="w-5 h-5 mx-auto text-brand-accent" />
              <p className="text-[10px] uppercase tracking-wider font-medium text-brand-dark">
                Free Shipping
              </p>
              <p className="text-[9px] text-brand-muted">On orders over $150</p>
            </div>
            <div className="space-y-1">
              <ShieldCheck className="w-5 h-5 mx-auto text-brand-accent" />
              <p className="text-[10px] uppercase tracking-wider font-medium text-brand-dark">
                Authentic
              </p>
              <p className="text-[9px] text-brand-muted">
                100% Certified Materials
              </p>
            </div>
            <div className="space-y-1">
              <RefreshCw className="w-5 h-5 mx-auto text-brand-accent" />
              <p className="text-[10px] uppercase tracking-wider font-medium text-brand-dark">
                30-Day Returns
              </p>
              <p className="text-[9px] text-brand-muted">
                Hassle-free guarantee
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-brand-beige/50 pt-16 space-y-8">
          <h2 className="text-xl font-light uppercase tracking-widest text-brand-dark text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
