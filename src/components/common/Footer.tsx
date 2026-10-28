import { Button } from "../ui/Button";

export const Footer = () => {
  return (
    <footer className="bg-brand-light border-t border-brand-beige/50 pt-12 pb-8 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 pb-10 border-b border-brand-beige/50 sm:grid-cols-2 md:grid-cols-4 md:gap-10 md:pb-12">
          <div className="space-y-4 md:col-span-1">
            <span className="text-lg font-light tracking-[0.2em] uppercase text-brand-dark block">
              ACCESSORIES{" "}
              <span className="text-[10px] tracking-widest text-brand-accent font-normal">
                STORE
              </span>
            </span>

            <p className="text-xs text-brand-muted font-light leading-relaxed">
              Minimalist and timeless jewelry designs.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-brand-dark">
              Shop
            </h4>

            <ul className="space-y-2 text-xs text-brand-muted">
              <li>
                <a href="#" className="hover:text-brand-dark transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-dark transition-colors">
                  Necklaces
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-dark transition-colors">
                  Rings
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-brand-dark">
              Help
            </h4>

            <ul className="space-y-2 text-xs text-brand-muted">
              <li>
                <a href="#" className="hover:text-brand-dark transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-dark transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3 md:col-span-1">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-brand-dark">
              Subscribe to Our Newsletter
            </h4>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2 pt-1"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white border border-brand-beige px-3 py-2 text-xs text-brand-dark focus:outline-none focus:border-brand-dark placeholder:text-gray-400"
              />

              <Button size="sm" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 text-center text-[11px] text-brand-muted flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} ACCESSORIES STORE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
