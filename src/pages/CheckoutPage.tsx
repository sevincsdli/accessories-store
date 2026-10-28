import { useState } from "react";
import { useCart } from "../features/cart/hooks/useCart";
import { formatCurrency } from "../utils/formatters";
import { Button } from "../components/ui/Button";
import { CheckCircle2, Lock } from "lucide-react";

export const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCompleted(true);
    clearCart();
  };

  if (isCompleted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-6">
        <CheckCircle2 className="w-16 h-16 text-brand-accent mx-auto" />
        <h1 className="text-3xl font-light uppercase tracking-widest text-brand-dark">
          Order Confirmed!
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
          Thank you for your purchase. We have received your order and are
          preparing it for shipment.
        </p>
        <Button onClick={() => (window.location.href = "/shop")}>
          Continue Shopping
        </Button>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-md mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="text-xl font-light uppercase tracking-widest text-brand-dark">
          Your Cart is Empty
        </h1>
        <p className="text-xs text-brand-muted">
          Please add some items to your cart before proceeding to checkout.
        </p>
        <Button onClick={() => (window.location.href = "/shop")}>
          Explore Shop
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <h1 className="text-2xl sm:text-3xl font-light uppercase tracking-widest text-brand-dark mb-10 text-center">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Form Column */}
        <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-8">
          {/* Shipping Info */}
          <div className="space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-dark border-b border-brand-beige/50 pb-2">
              Shipping Address
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                required
                type="text"
                placeholder="First Name"
                className="bg-brand-light border border-brand-beige px-4 py-3 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                className="bg-brand-light border border-brand-beige px-4 py-3 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
              />
            </div>
            <input
              required
              type="email"
              placeholder="Email Address"
              className="w-full bg-brand-light border border-brand-beige px-4 py-3 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
            />
            <input
              required
              type="text"
              placeholder="Street Address"
              className="w-full bg-brand-light border border-brand-beige px-4 py-3 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
            />
          </div>

          {/* Payment Info */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-dark border-b border-brand-beige/50 pb-2 flex items-center justify-between">
              <span>Payment Details</span>
              <Lock className="w-4 h-4 text-brand-accent" />
            </h2>
            <input
              required
              type="text"
              placeholder="Card Number"
              className="w-full bg-brand-light border border-brand-beige px-4 py-3 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                required
                type="text"
                placeholder="MM/YY"
                className="bg-brand-light border border-brand-beige px-4 py-3 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
              />
              <input
                required
                type="text"
                placeholder="CVC"
                className="bg-brand-light border border-brand-beige px-4 py-3 text-xs text-brand-dark focus:outline-none focus:border-brand-dark"
              />
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full">
            Complete Order • {formatCurrency(totalPrice)}
          </Button>
        </form>

        {/* Order Summary Column */}
        <div className="lg:col-span-5 bg-brand-light p-8 space-y-6 h-fit border border-brand-beige">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-dark border-b border-brand-beige/50 pb-3">
            Order Summary ({items.length} items)
          </h2>

          <div className="space-y-4 max-h-80 overflow-y-auto">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-4 items-center">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-12 h-14 object-cover bg-white"
                />
                <div className="flex-1">
                  <h4 className="text-xs font-medium text-brand-dark uppercase">
                    {product.name}
                  </h4>
                  <p className="text-[10px] text-brand-muted">
                    Qty: {quantity}
                  </p>
                </div>
                <span className="text-xs font-semibold">
                  {formatCurrency(product.price * quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-brand-beige/60 pt-4 space-y-2 text-xs">
            <div className="flex justify-between text-brand-muted">
              <span>Subtotal</span>
              <span>{formatCurrency(totalPrice)}</span>
            </div>
            <div className="flex justify-between text-brand-muted">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold text-brand-dark text-sm pt-2 border-t border-brand-beige/60">
              <span>Total</span>
              <span>{formatCurrency(totalPrice)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
