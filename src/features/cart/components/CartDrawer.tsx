import React from "react";
import { X, ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "../../cart/hooks/useCart";
import { formatCurrency } from "../../../utils/formatters";
import { Button } from "../../../components/ui/Button";

export const CartDrawer: React.FC = () => {
  const {
    isOpen,
    closeCart,
    items,
    removeFromCart,
    updateQuantity,
    totalPrice,
    freeShippingThreshold,
    freeShippingProgress,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-brand-beige/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-brand-dark" />
              <h2 className="text-sm font-semibold tracking-wider uppercase text-brand-dark">
                Your Cart ({items.length})
              </h2>
            </div>

            <button
              onClick={closeCart}
              aria-label="Close cart"
              className="p-1 text-gray-400 hover:text-brand-dark cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="px-6 py-3 bg-brand-light border-b border-brand-beige/40">
            <p className="text-xs text-brand-dark mb-1 font-medium">
              {totalPrice >= freeShippingThreshold ? (
                <span className="text-green-700">
                  Congratulations! You qualify for free shipping 🎉
                </span>
              ) : (
                `Add ${formatCurrency(freeShippingThreshold - totalPrice)} more to your cart to qualify for free shipping.`
              )}
            </p>

            <div className="w-full h-1.5 bg-brand-beige rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-accent transition-all duration-300"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-sm text-brand-muted">Your cart is empty.</p>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-4 border-b border-brand-beige/30 pb-4"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-20 h-24 object-cover rounded-xs bg-brand-light"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-xs font-medium text-brand-dark uppercase tracking-wide">
                          {product.name}
                        </h3>

                        <button
                          onClick={() => removeFromCart(product.id)}
                          aria-label={`Remove ${product.name} from cart`}
                          className="text-gray-400 hover:text-red-500 cursor-pointer ml-2"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <p className="text-xs font-semibold text-brand-dark mt-1">
                        {formatCurrency(product.price)}
                      </p>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-3 border border-brand-beige w-fit px-2 py-1">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        aria-label="Decrease quantity"
                        className="text-brand-dark hover:text-brand-accent cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>

                      <span className="text-xs font-medium w-4 text-center">
                        {quantity}
                      </span>

                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        aria-label="Increase quantity"
                        className="text-brand-dark hover:text-brand-accent cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Summary */}
          {items.length > 0 && (
            <div className="p-6 border-t border-brand-beige/50 bg-brand-light/30 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-brand-muted uppercase text-xs tracking-wider">
                  Subtotal:
                </span>

                <span className="font-semibold text-brand-dark text-base">
                  {formatCurrency(totalPrice)}
                </span>
              </div>

              <Button className="w-full">Proceed to Checkout</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
