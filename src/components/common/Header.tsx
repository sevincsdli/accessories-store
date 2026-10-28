import { Link } from "react-router-dom";
import { ShoppingBag, Search, Menu, UserRound } from "lucide-react";
import { useCart } from "../../features/cart/hooks/useCart";

interface HeaderProps {
  onOpenSearch: () => void;
}

export const Header = ({ onOpenSearch }: HeaderProps) => {
  const { toggleCart, totalItems } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-brand-beige/40 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Mobile Menu Icon */}
        <button className="md:hidden p-2 text-brand-dark">
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="flex-1 md:flex-none text-center md:text-left">
          <Link to="/" className="inline-flex items-center gap-3 group">
            <div className="w-9 h-9 border border-brand-dark/80 group-hover:border-brand-accent transition-colors flex items-center justify-center relative">
              <div className="w-7 h-7 border border-brand-accent/40 absolute -top-1 -right-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span className="font-serif italic font-medium text-lg text-brand-dark group-hover:text-brand-accent transition-colors">
                A
              </span>
            </div>

            <div className="flex flex-col text-left">
              <span className="text-base md:text-lg font-light tracking-[0.25em] uppercase text-brand-dark leading-tight group-hover:text-brand-accent transition-colors">
                ACCESSORIES
              </span>
              <span className="text-[9px] tracking-[0.4em] uppercase text-brand-accent font-medium leading-none mt-0.5">
                STUDIO & STORE
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-brand-dark">
          <Link to="/" className="hover:text-brand-accent transition-colors">
            Home
          </Link>
          <Link
            to="/shop"
            className="hover:text-brand-accent transition-colors"
          >
            Shop All
          </Link>
          <Link
            to="/story"
            className="hover:text-brand-accent transition-colors"
          >
            Our Story
          </Link>
          <Link
            to="/contact"
            className="hover:text-brand-accent transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="p-2 text-brand-dark hover:text-brand-accent transition-colors"
            aria-label="Login"
          >
            <UserRound className="w-5 h-5" />
          </Link>

          <button
            onClick={onOpenSearch}
            className="p-2 text-brand-dark hover:text-brand-accent transition-colors cursor-pointer"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={toggleCart}
            className="p-2 text-brand-dark hover:text-brand-accent transition-colors relative cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
